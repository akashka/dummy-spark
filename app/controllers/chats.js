var Chat = require("../models/chat");
var AWS = require("aws-sdk");
var fs = require("fs");
var mime = require("mime-types");
var inspect = require("util").inspect;
var Busboy = require("busboy");

const BUCKET_NAME = "olwspark";
const IAM_USER_KEY = "AKIAIFJ6LTJD65VW6V4A";
const IAM_USER_SECRET1 = "XbbcDB1Qo92";
const IAM_USER_SECRET2 = "wT2wnp4mO9qLGpD+";
const IAM_USER_SECRET3 = "GNEEyfqqj4EoS";

exports.getChatListing = function(req, res, next) {
  Chat.find(
    {},
    {
      _id: 1,
      group_id: 1,
      dp: 1,
      name: 1,
      members: 1,
      silent_members: 1,
      admin: 1,
      last_login: 1,
      active: 1
    },
    function(err, chats) {
      if (err) {
        res.send(err);
      }
      res.json(chats);
    }
  );
};

exports.getChatMessages = function(req, res, next) {
  var userId = req.params.userId;
  var chatId = req.params.chatId;
  Chat.findOne({ _id: chatId }, { messages: 1 }, function(err, chats) {
    if (err) {
      res.send(err);
    }
    chatId + "/" + userId;
    res.json(chats);
  });

  Chat.findOne({ _id: chatId }, { _id: 1, last_login: 1 }, function(
    err,
    chats
  ) {
    if (!err) {
      chats.last_login[userId] = new Date();
      Chat.findOneAndUpdate(
        { _id: chats._id },
        { $set: { last_login: chats.last_login } },
        function(err, chat) {}
      );
    }
  });
};

exports.updateChatMessage = function(req, res, next) {
  var id = req.params.id;
  var message = req.body;
  Chat.findOneAndUpdate({ _id: id }, { $set: { messages: message } }, function(
    err,
    chat
  ) {
    if (err) return res.send(err);
    res.json(chat);
  });
};

exports.updateChat = function(req, res, next) {
  var id = req.params.id;
  Chat.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        group_id: req.body.group_id,
        dp: req.body.dp,
        name: req.body.name,
        members: req.body.members,
        silent_members: req.body.silent_members,
        admin: req.body.admin,
        last_login: req.body.last_login,
        active: req.body.active
      }
    },
    function(err, chat) {
      if (err) return res.send(err);
      res.json(chat);
    }
  );
};

exports.uploadToS3 = function(req, res, next) {
  var busboy = new Busboy({ headers: req.headers });
  var Field = {};
  var blobFile;
  busboy.on("file", function(fieldname, file, filename, encoding, mimetype) {
    Field[fieldname] = {};
    Field[fieldname].file = file;
    Field[fieldname].filename = filename;
    Field[fieldname].encoding = encoding;
    Field[fieldname].mimetype = mimetype;
    blobFile = file;
    file.on("data", function(data) { 
      // blobFile = data;
    });
    file.on("end", function() { });
  });
  busboy.on("field", function(fieldname, val, fieldnameTruncated, encoding, mimetype) {
    Field[fieldname] = {};
    Field[fieldname].val = val;
    Field[fieldname].fieldnameTruncated = fieldnameTruncated;
    Field[fieldname].encoding = encoding;
    Field[fieldname].mimetype = mimetype;
  });
  busboy.on("finish", function() {
    uploadNow(req, res, next, Field, blobFile);
  });
  req.pipe(busboy);
};

function uploadNow(req, res, next, Field, blobFile) {
  let s3bucket = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET1 + IAM_USER_SECRET2 + IAM_USER_SECRET3,
    Bucket: BUCKET_NAME,
    ServerSideEncryption: 'AES256'
  });
  s3bucket.createBucket(function() {    
    var params = {
      Bucket: BUCKET_NAME,
      Key: Field.file_name.val,
      Body: blobFile,
      ACL: "public-read",
      ContentType: Field.file.mimetype
    };
    s3bucket.upload(params, function(err, data) {
      if (err) {
        console.log("err", err);
        res.send(err);
      }
      res.json(data);
    });
  });
};
