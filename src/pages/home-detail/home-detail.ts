import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home-detail',
  templateUrl: 'home-detail.html'
})
export class HomeDetailPage {
  item: any;

  constructor( public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('data');
    console.log(this.item);
  }

}
