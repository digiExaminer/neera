import { Component } from '@angular/core';
import {
  Config,
  NavController
} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ConferenceData } from '../../providers/conference-data';
import { BlockDetailsPage } from '../block-details/block-details';


@Component({
  selector: 'page-kodarma',
  templateUrl: 'kodarma.html'
})
export class KodarmaPage {


  kodermaDetails: any[] = [];

  constructor(
    public navCtrl: NavController,
    public confData: ConferenceData,
    public config: Config,
    public inAppBrowser: InAppBrowser
  ) {
    this.confData.getBlockdata().subscribe((aboutkoderma:any[]) =>{
      this.kodermaDetails = aboutkoderma;
    });
  }

  goBlockDetail(data){
    this.navCtrl.push(BlockDetailsPage,{data});
  }

}
