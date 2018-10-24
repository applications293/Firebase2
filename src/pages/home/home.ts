import { UpdatePage } from './../update/update';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  name;
  //array to populate
  items=[];
  //object carrying object
  myData={
    name:'',
    key:''
  }

  i={
    key:'',
    name:''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  // firebase.database().ref('/myData/').on("value", (snapshot) =>{
  //   snapshot.forEach((snap) => {
  //     //console.log(snap.val())
  //     //console.log(snap.key);
  //     //append to item list
  //     this.items.push({name:snap.val().name,key:snap.key});
      
  //     return false;
  //   });
  // });
  this.reEnterDB();
  }

  ionViewDidLoad() {
    console.log('HomePage has loaded..');
  }

  writeToDB(){
    console.log(this.name);
      this.myData.name = this.name;
    var database = firebase.database();
    database.ref('/myData/').push(this.myData);
    this.items=[];
    this.reEnterDB();
  }

  reEnterDB(){
    firebase.database().ref('/myData/').on("value", (snapshot) =>{
      snapshot.forEach((snap) => {
        //console.log(snap.val())
        //console.log(snap.key);
        //append to item list
        this.items.push({name:snap.val().name,key:snap.key});
        
        return false;
      });
    });
  }

  updateDB(item){
    //i.name = "ss"; //i is an object
    var database = firebase.database();
    database.ref('/myData/'+ item.key).set({name: item.name});
    this.items=[];
    this.reEnterDB();
  }

  delete(i){
    
      var database = firebase.database();
      database.ref('/myData/'+i.key).remove();
  }

  nextPage(item)
  {
    
    this.navCtrl.push(UpdatePage, {valToUpdt: item});
  }
}
