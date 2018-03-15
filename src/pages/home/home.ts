import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { Device } from '@ionic-native/device';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  deviceInfo : any;

  constructor(
    public navCtrl: NavController,
    private device: Device
  ) {
    this.deviceInfo = this.device;
  }
  goToChat(){
    this.navCtrl.push(ContactPage);
  }

}
