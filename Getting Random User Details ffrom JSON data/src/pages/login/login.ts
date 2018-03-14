import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


@ViewChild('Username') usercode;
@ViewChild('Password') passcode;



  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  
  OpenMainPage(){
  if(this.usercode.value=="" || this.passcode.value==""){            
  let alert = this.alertCtrl.create({
      title: 'Login Alert!',
      subTitle: 'Username or Password is Empty',                     
      buttons: ['OK']
    });
    alert.present();                                                  
  }
  else if(this.usercode.value!="user" || this.passcode.value!="user"){    
  let alert = this.alertCtrl.create({
      title: 'Login Alert!',
      subTitle: 'Username or Password Not Matched',
      buttons: ['Try Again']
    });
    alert.present();
  }
  else if(this.usercode.value=="user" && this.passcode.value=="user"){     
  let loader = this.loadingCtrl.create({
      content: "Sign In ...",
      duration: 500                                                         
    });
    loader.present();
    this.navCtrl.push(TabsPage);
  }
  
  }

}
