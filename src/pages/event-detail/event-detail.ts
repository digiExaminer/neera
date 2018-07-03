import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {
  item: any;

  constructor(public dataProvider: ConferenceData, public navCtrl: NavController, public navParams: NavParams) {
   console.log( this.navParams.get('data'));
   this.item = this.navParams.get('data');
  }
}
