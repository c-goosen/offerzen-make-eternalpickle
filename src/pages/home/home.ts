import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { Device } from '@ionic-native/device';
import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // deviceInfo : any;
  // deviceInfo : any;

  constructor(
    public navCtrl: NavController,
    private device: Device,
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

}
