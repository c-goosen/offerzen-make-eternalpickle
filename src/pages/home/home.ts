import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { Device } from '@ionic-native/device';
import { Platform } from 'ionic-angular';
import { RootAPIHandler } from '../../providers/root-provider/root-handler';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // deviceInfo : any;
  // deviceInfo : any;
  private rate: any;

  constructor(
    public navCtrl: NavController,
    private device: Device,
    private rootApi : RootAPIHandler,
    platform: Platform
  ) {
    platform.ready().then(() => {
    // this.deviceInfo = this.device;
    // this.device.
    this.device.model = "iPhone 7 Plus 256GB LTE";
    
    });
  }
  goToChat(){
    this.navCtrl.push(ContactPage);
  }

  ionViewWillEnter() {
    this.rate = this.rootApi.GetPhoneEstimate(this.device.model);

    this.rootApi.GetPhoneEstimate(this.device.model).subscribe((data) => {
      console.log(JSON.stringify(data,null,4));
    })
    // this.rate.sib
  }

  // on

}
