var Indentation = require('../models/indentation');
var sgMail = require('@sendgrid/mail');
var curl = require('curlrequest');
var fs = require('fs');
var path = require("path");

var smsUrl = "http://alerts.valueleaf.com/api/v4/?api_key=A172d1e496771a5758651f00704e4ad18";
var adminNumber = "7259596963";
var adminEmail = "akash.ka01@gmail.com";
var senderID = "LILWON";

var apiKey = "SG";
apiKey += ".9kXtc70kTr2d62";
apiKey += "_zZHxelg";
apiKey += "J9HoPQ";
apiKey += "-3C3W12tJY9XTltepTBqQHV0RGx5XQiCdO";
apiKey += "-eU";
sgMail.setApiKey(apiKey);

exports.getIndentations = function(req, res, next) {
    console.log("Getting list of Indentations");
    Indentation.find(function(err, indentations) {
        if (err) { 
            console.log("Error in getting list of Indentations");
            return res.send(err); 
        }
        res.json(indentations);
    });
}
 
exports.createIndentation = function(req, res, next) {
    console.log("New Indentation received");
    var indentation = req.body;
    Indentation.create(indentation, function(err, indentation) {
        if (err) { 
            console.log("Error in creating Indentation");
            return res.send(err); 
        }
        sendMail(indentation);
        sendSms(indentation);

        res.json(indentation);
    });
}
 
exports.updateIndentation = function(req, res, next) {
    var indentation = req.body;
    delete indentation._id;
    
    Indentation.findOneAndUpdate(req.body._id, indentation, {upsert: true, new: true}, function(err, indentation) {
        if (err) return res.send(err);
        res.json(indentation);
    });
}

sendMail = function(indentation) {
    console.log("Sending indentation mail");

    var amt = "Student ID - Amount <br/>";
    for(var i = 0; i < indentation.students_amount.length; i++) {
       amt += indentation.students_amount[i].student_id + " - " + indentation.students_amount.amount + "<br/>";
    }

    var stringTemplate = fs.readFileSync(path.join(__dirname, '../helpers') + '/admin_indentation.html', "utf8");
     stringTemplate = stringTemplate.replace('{{total_amount}}', indentation.total_amount);
     stringTemplate = stringTemplate.replace('{{payment_mode}}', indentation.payment_mode);
     stringTemplate = stringTemplate.replace('{{payment_date}}', indentation.payment_date);
     stringTemplate = stringTemplate.replace('{{bank_name}}', indentation.bank_name);
     stringTemplate = stringTemplate.replace('{{cheque_no}}', indentation.cheque_no);
     stringTemplate = stringTemplate.replace('{{center_code}}', indentation.center_code);
     stringTemplate = stringTemplate.replace('{{counsellor}}', indentation.email_id);
     stringTemplate = stringTemplate.replace('{{transaction_no}}', indentation.transaction_no);
     stringTemplate = stringTemplate.replace('{{amt}}', amt);

      var mailOptions = {
        to: adminEmail,
        from: 'info@little-wonders.in',
        subject: "New indentation received",
        html: stringTemplate
      };

      sgMail.send(mailOptions, function(err) {
        if(err) console.log(err.response.body);
      });
}

sendSms = function(indentation) {
    console.log("Sending Indentation SMS");

    var messageData = "";
    messageData = "Indentation from " + indentation.center_code + 
        ", Total Amount: " + indentation.total_amount + 
        ", Payment Date: " + indentation.payment_date +
        ", Payment Mode: " + indentation.payment_mode +
        ", Bank: " + indentation.bank_name +
        ", Cheque No: " + indentation.cheque_no +
        ", Transaction No: " + indentation.transaction_no +
        ", Counsellor: " + indentation.email;

    var formData = smsUrl + "&method=sms&message=" + encodeURIComponent(messageData) + "&to=" + adminNumber + "&sender=" + senderID;
    curl.request(formData, 
      function optionalCallback(err, body) {
      if (err) {
        return console.error('Sending Indentation SMS failed: ', err);
      }
      console.log('Successfully sent Indentation SMS');
    });
}