import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConferenceData } from '../../providers/conference-data';




@Component({
  selector: 'page-development',
  templateUrl: 'development.html'
})
export class DevelopmentPage {

  development: any[] = [];

  constructor(
    public navCtrl: NavController,
    public confData: ConferenceData
  ) {
    this.confData.getDevelopment().subscribe((data: any[]) => {
      this.development = data;

     });
  }


}
