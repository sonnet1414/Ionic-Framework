import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {                     /* NavController handle the event */
 
  }
  OpenLoginPage(){
  this.navCtrl.push(LoginPage);                                    /*redirect page instruction */
  }

}