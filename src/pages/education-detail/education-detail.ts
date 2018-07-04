import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-education-detail',
  templateUrl: 'education-detail.html'
})
export class EducationDetailPage {
  item: any;

  constructor(public dataProvider: ConferenceData, public navCtrl: NavController, public navParams: NavParams) {
   this.item = this.navParams.get('data');
  }
}
