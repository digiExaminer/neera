import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ConferenceData } from '../../providers/conference-data';
import {AchievementDetailPage} from '../achievement-detail/achievement-detail';


@Component({
  selector: 'page-achievement-list',
  templateUrl: 'achievement-list.html'
})
export class AchievementPage {

  achievement: any[] = [];

  constructor(
    public navCtrl: NavController,
    public confData: ConferenceData
  ) {
    this.confData.getAchievement().subscribe((data: any[]) => {
      this.achievement = data;
      console.log(this.achievement);
     });
  }

  goAchievementDetail(data){
    this.navCtrl.push(AchievementDetailPage,{data});
  }
}
