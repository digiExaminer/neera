import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BlockDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-block-details',
  templateUrl: 'block-details.html',
})
export class BlockDetailsPage {
  item: any;

  constructor( public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('data');
    console.log(this.item);
  }



}
