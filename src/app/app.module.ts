import { BlockDetailsPage } from './../pages/block-details/block-details';
import { YoutubePipe } from './../pipes/youtube/youtube';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';


import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { HomePage} from '../pages/home/home';
import { HomeFilterPage } from '../pages/home-filter/home-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { NewsDetailPage } from '../pages/news-detail/news-detail';
import { NewsListPage } from '../pages/news-list/news-list';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

import {AchievementPage} from '../pages/achievement-list/achievement-list';
import {AchievementDetailPage} from '../pages/achievement-detail/achievement-detail';
import {KodarmaPage} from '../pages/kodarma/kodarma';
import {DevelopmentPage} from '../pages/development/development';
import {MediaPage} from '../pages/media/media';
import {WomenImpowermentPage} from '../pages/women-impowerment/women-impowerment';
import {EducationAndSupportPage} from '../pages/education-support/education-support';
import {EventDetailPage} from '../pages/event-detail/event-detail';
import {HomeDetailPage} from '../pages/home-detail/home-detail';
import{WomenEmpowermentDetailPage} from '../pages/women-empoermentdetail/women-empoermentdetail';
import {EducationDetailPage} from '../pages/education-detail/education-detail';
import {SportDetailPage} from '../pages/sport-detail/sport-detail';


@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    HomePage,
    HomeFilterPage,
    SessionDetailPage,
    SignupPage,
    NewsDetailPage,
    NewsListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    AchievementPage,
    AchievementDetailPage,
    KodarmaPage,
    DevelopmentPage,
    MediaPage,
    WomenImpowermentPage,
    EducationAndSupportPage,
    YoutubePipe,
    EventDetailPage,
    HomeDetailPage,
    WomenEmpowermentDetailPage,
    EducationDetailPage,
    SportDetailPage,
    BlockDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,


    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: HomePage, name: 'Home', segment: 'home' },
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
        { component: HomeFilterPage, name: 'HomeFilter', segment: 'HomeFilter' },
        { component: NewsListPage, name: 'newsList', segment: 'newsList' },
        { component: NewsDetailPage, name: 'NewsDetail', segment: 'newsDetail/:newsId' },
        { component: MapPage, name: 'Map', segment: 'map' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        { component: AchievementPage, name: 'AchievementPage', segment: 'achievement'},
        { component: MediaPage, name: 'MediaPage', segment: 'media' },
        { component: KodarmaPage, name: 'KodarmaPage', segment: 'kodarma' },
        { component: AchievementDetailPage, name: 'AchievementDetailPage', segment: 'achievementDetail' },
        { component: DevelopmentPage, name: 'DevelopmentPage', segment: 'development' },
        { component: WomenImpowermentPage, name: 'WomenImpowermentPage', segment: 'womenImpowerment' },
        { component: EducationAndSupportPage, name: 'EducationAndSupportPage', segment: 'educationAndSupport' },
        { component: EventDetailPage, name: 'EventDetailPage', segment: 'eventDetail' },
        { component: HomeDetailPage, name: 'HomeDetailPage', segment: 'homeDetail' },
        { component: WomenEmpowermentDetailPage, name: 'WomenEmpowermentDetailPage', segment: 'womenEmpowermentDetail' },
        { component: EducationDetailPage, name: 'EducationDetailPage', segment: 'educationDetail' },
        { component: SportDetailPage, name: 'SportDetailPage', segment: 'sportDetail' },
        { component: BlockDetailsPage, name: 'BlockDetailsPage', segment: 'BlockDetails' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    HomePage,
    HomeFilterPage,
    SessionDetailPage,
    SignupPage,
    NewsDetailPage,
    NewsListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    AchievementPage,
    AchievementDetailPage,
    KodarmaPage,
    DevelopmentPage,
    MediaPage,
    WomenImpowermentPage,
    EducationAndSupportPage,
    EventDetailPage,
    HomeDetailPage,
    WomenEmpowermentDetailPage,
    EducationDetailPage,
    SportDetailPage,
    BlockDetailsPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule { }
