import { Component } from "@angular/core";
import { 
    NavController, 
    ModalController, 
    AlertController, 
    LoadingController, 
    App,
    MenuController 
} from 'ionic-angular';
import { Students } from '../../providers/students/students';
import { Auth } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { ConfirmPage } from '../confirm/confirm';
import * as _ from 'lodash'
import { Storage } from '@ionic/storage';
 
@Component({
  selector: 'promotion-page',
  templateUrl: './promotion.html'
})

export class PromotionPage {

  public students: any;
  public studentsList: any;
  public isAdmin: Boolean = false;
  public isCenterAdmin: Boolean = false;
  public isCounsellor: Boolean = false;
  myInput: string;
  public loader: any;

  constructor(
    public navCtrl: NavController, 
    public studentService: Students, 
    public modalCtrl: ModalController, 
    public alertCtrl: AlertController, 
    public authService: Auth, 
    public menu: MenuController,
    public loading: LoadingController,
    public storage: Storage,
    public app: App
  ) {
      this.storage.get('user').then((user) => {
         if(user.role === "counsellor")  this.isCounsellor = true;
         else if(user.role === "admin")  this.isAdmin = true;
         else if(user.role === "centerAdmin")  this.isCenterAdmin = true;
         else this.isCounsellor = true;
      }); 
  }
 
  ionViewDidLoad() {
    this.loader = this.loading.create({
      content: 'Please wait...',
    });
    this.studentService.getStudents().then((data) => {
      data = _.filter(data, function(o) { 
        return (o.status == 'indented' && o.is_Indented); 
      });
      this.storage.get('user').then((user) => {
        data = _.filter(data, function(o) { 
          return (o.center == user.center); 
        });
        this.students = (_.sortBy(data, 'indentation_date')).reverse();
        this.studentsList = (_.sortBy(data, 'indentation_date')).reverse();
      });
    }, (err) => {
        console.log("not allowed");
    });
  }

  // Function to search for a student dynamically based on an input
  search() {
    var result = [];
    for(var i = 0; i < this.studentsList.length; i++) {
      if (_.includes(this.studentsList[i].name, this.myInput)) { result.push(this.studentsList[i]); } 
      else if (_.includes(this.studentsList[i].alternate_contact, this.myInput)) { result.push(this.studentsList[i]); } 
      else if (_.includes(this.studentsList[i].class_group, this.myInput)) { result.push(this.studentsList[i]); } 
      else if (_.includes(this.studentsList[i].email_id, this.myInput)) { result.push(this.studentsList[i]); } 
      else if (_.includes(this.studentsList[i].locality, this.myInput)) { result.push(this.studentsList[i]); } 
      else if (_.includes(this.studentsList[i].parent_name, this.myInput)) { result.push(this.studentsList[i]); } 
      else if (_.includes(this.studentsList[i].phone_number, this.myInput)) { result.push(this.studentsList[i]); } 
    }
    this.students = result;
    if(this.myInput === "") this.students = this.studentsList;
  }
 
  add() {
  	this.navCtrl.setRoot(HomePage);
  }

  update(student) {
      student.is_Indented = false;
      student.is_Confirmed = false;
      student.is_Delivered = false;
      student.confirmation_date = null;
      student.indentation_date = null;
      student.delivery_date = null;

    if(student.class_group === 'UKG') { student.class_group = 'UKG'; }
    if(student.class_group === 'LKG') { student.class_group = 'UKG'; }
    if(student.class_group === 'Nursery') { student.class_group = 'LKG'; }
    if(student.class_group === 'Play Group') { student.class_group = 'Nursery'; }

    if(student.study_year === '2019-20') { student.study_year = '2020-21'; }
    if(student.study_year === '2018-19') { student.study_year = '2019-20'; }
    if(student.study_year === '2017-18') { student.study_year = '2018-19'; }
    if(student.study_year === '2016-17') { student.study_year = '2017-18'; }

    this.storage.set('confirmed_student', student);
    this.navCtrl.setRoot(ConfirmPage);
  }

}