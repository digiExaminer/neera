import { Component } from '@angular/core';
import {
  Config,
  NavController
} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ConferenceData } from '../../providers/conference-data';
import { NewsDetailPage } from '../news-detail/news-detail';


@Component({
  selector: 'page-news-list',
  templateUrl: 'news-list.html'
})
export class NewsListPage {

  news: any[] = [];

  constructor(
    public navCtrl: NavController,
    public confData: ConferenceData,
    public config: Config,
    public inAppBrowser: InAppBrowser
  ) {
    this.confData.getEvents().subscribe((events:any[]) =>{
      this.news = events;
    });
  }

  // goToNewsDetail(news: any) {
  //   this.navCtrl.push(NewsDetailPage, { newsId: news.id });
  // }
  goNewsDetail(data){
    this.navCtrl.push(NewsDetailPage,{data});
  }
}
