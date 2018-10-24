//import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {

  valToUpdate;
  item;
  val:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('valToUpdt');
    this.val = this.item.name;
    console.log(this.val);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

 
  updateDB(item){
    //i.name = this.valToUpdate; //i is an object
    var database = firebase.database();
    database.ref('/myData/'+ this.item.key).set({name: this.valToUpdate});
    //this.reEnterDB();
    this.navCtrl.push("HomePage");
  }

}
