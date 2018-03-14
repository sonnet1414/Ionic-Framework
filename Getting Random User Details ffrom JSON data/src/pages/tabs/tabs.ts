import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , App, LoadingController } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public app: App, public loadingCtrl: LoadingController) {
  }


  LogoutPage(){
  const root= this.app.getRootNav();
  root.popToRoot();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  users:any;
  LoadJsonData(){
  let loader = this.loadingCtrl.create({
      content: "Loading Data...",
      duration: 2000
    });
    loader.present();

  this.http.get('https://randomuser.me/api/')
  .map(res => res.json())
  .subscribe(res =>{
  this.users = res.results;
  }, (err) => {
  alert("failed loading json data ");
  });

  }

}
