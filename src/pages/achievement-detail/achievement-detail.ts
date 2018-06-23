import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-achievement-detail',
  templateUrl: 'achievement-detail.html'
})
export class AchievementDetailPage {
  news: any;

  constructor(public dataProvider: ConferenceData, public navCtrl: NavController, public navParams: NavParams) {
   console.log( this.navParams.get('data'));
  }
  
}
