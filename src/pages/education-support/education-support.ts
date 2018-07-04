import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { ConferenceData } from '../../providers/conference-data';
import {EducationDetailPage} from '../education-detail/education-detail';
import {SportDetailPage} from '../sport-detail/sport-detail';

@Component({
  selector: 'page-education-support',
  templateUrl: 'education-support.html'
})
export class EducationAndSupportPage {

  segment = 'education';
  tabDisplayFlag = false;
  educationData:any [] = [];
  sportData:any [] = [];
  
  constructor(public navCtrl: NavController, public confData: ConferenceData) {
    this.updateEducation();
  }
  updateEducation(){
    if(this.segment === 'sports'){
    // service call to get sport data
    this.confData.getSportsData().subscribe((data:any[]) =>{
      this.sportData = data;
    });
      this.tabDisplayFlag = true;
    }else{
    // service call to get Education Data
    this.confData.getEducationData().subscribe((data:any[]) =>{
      this.educationData = data;
    });
      this.tabDisplayFlag = false;
    }
  }

  // go to sport details page
   redirectTOSportDetail(data){
     this.navCtrl.push(SportDetailPage,{data});
    }

  // go to education details page
   redirectEducationDetail(data){
     this.navCtrl.push(EducationDetailPage,{data});
    }
}
