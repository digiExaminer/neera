import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { ConferenceData } from '../../providers/conference-data';
import {WomenEmpowermentDetailPage} from '../women-empoermentdetail/women-empoermentdetail';

@Component({
  selector: 'page-women-impowerment',
  templateUrl: 'women-impowerment.html'
})
export class WomenImpowermentPage {

womenEmpowermentData: any[] = [];

  constructor(
    public navCtrl: NavController, public confData: ConferenceData
  ) {
    this.confData.getWomenEmpowermentData().subscribe((data:any[]) =>{
      this.womenEmpowermentData = data;
    });
  }

   goWomenEmpowermentDetails(data){
    this.navCtrl.push(WomenEmpowermentDetailPage,{data});
   }

}
