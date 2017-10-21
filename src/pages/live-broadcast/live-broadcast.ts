import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the LivebroadcastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-live-broadcast',
  templateUrl: 'live-broadcast.html',
})
export class LiveBroadcastPage {
  public videoUrl: string = "http://u166.auto.s.wanglitiaoyi.com/live/3693838317.m3u8"  //AppGlobal.domain + "/upload/dy/yyzls/1.mp4";
  public liveBroadcast: any = {};
  public videoType: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.liveBroadcast = navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiveBroadcastPage');
  }

  ionViewDidEnter() {
    this.switchVideo(this.liveBroadcast.type);
  }

  /**
   * 切换视频
   * @param {number} type
   */
  switchVideo(type: number) {
    this.videoType = type;
    if (type == 1) {
      this.videoUrl = "http://u166.auto.s.wanglitiaoyi.com/live/3693838317.m3u8"
    }
    if (type == 2) {
      this.videoUrl = "http://u166.auto.s.wanglitiaoyi.com/live/3433230830.m3u8"
    }
  }
}
