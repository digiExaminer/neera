import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'


@Component({
  selector: 'page-media',
  templateUrl: 'media.html'
})
export class MediaPage {
  profileUrl:string='';
  channelId :string ='UC85hhp-BJCsycB4Y6dwylHw';
  maxRes: string='4';
  googleToken='AIzaSyDaDJzyG5k1_fF0B233RJU4ckBp34dju2w';
  search:string='ionic-2';
  posts:any=[];
  constructor(public navCtrl: NavController,public http: Http) {
    let url="https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%20&playlistId=PLSMsA8lz8TLzpnOoX4CTJhnUWMJzzMfqF&key=AIzaSyDPqPb7KdKk2SRkgJbcaZTxncBiPM1F7aQ";
    this.http.get(url).map(res=>res.json()).subscribe(data=>{
      this.posts=this.posts.concat(data.items);
      this.profileUrl="assets/img/speakers/bear.jpg";
      console.log(this.posts);
    })
    }

}
