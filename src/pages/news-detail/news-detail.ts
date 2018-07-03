import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html'
})
export class NewsDetailPage {
  item: any;

  constructor( public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('data');
    console.log(this.item);
  }

}
