import { Component, ViewChild } from '@angular/core';

import { AlertController, App, FabContainer, ItemSliding, List, ModalController, NavController, ToastController, LoadingController, Refresher } from 'ionic-angular';


import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';

import { SessionDetailPage } from '../session-detail/session-detail';
import {HomeFilterPage  } from '../home-filter/home-filter';
import {EventDetailPage} from '../event-detail/event-detail';
import {HomeDetailPage} from '../home-detail/home-detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // the list is a child of the home page
  // @ViewChild('homeList') gets a reference to the list
  // with the variable #homeList, `read: List` tells it to return
  // the List and not a reference to the element
  @ViewChild('homeList', { read: List }) homeList: List;

  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  eventData:any = [];
  homePageData = [];
  eventFlag = false;
  homeFlag = false;
  favoriteFlag = false;
  confDate: string;

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public confData: ConferenceData,
    public user: UserData,
  ) {}

  ionViewDidLoad() {
    this.app.setTitle('Home');
    this.updateHome();
  }

  updateHome() {
    if(this.segment === 'event'){
      this.confData.getEvents().subscribe((events:any[]) =>{
        this.eventData = events;
      });
      this.eventFlag = true;
      this.homeFlag = false;
      this.favoriteFlag = false;
    }else if(this.segment === 'all'){
      // get data for home page
      this.confData.getHomeData().subscribe((events:any[]) =>{
        this.homePageData = events;
        console.log(this.homePageData)
      });
      this.eventFlag = false;
      this.homeFlag = true;
      this.favoriteFlag = false;
    } else if(this.segment == 'favorites'){
      // get data for favorites
      this.eventFlag = false;
      this.homeFlag = false;
      this.favoriteFlag = true;
    }
  }



  openSocial(network: string, fab: FabContainer) {
    let loading = this.loadingCtrl.create({
      content: `Posting to ${network}`,
      duration: (Math.random() * 1000) + 500
    });
    loading.onWillDismiss(() => {
      fab.close();
    });
    loading.present();
  }

  goEventDetails(data){
    this.navCtrl.push(EventDetailPage,{data});
  }
  goHomeDetail(data){
     this.navCtrl.push(HomeDetailPage,{data});
  }

}
