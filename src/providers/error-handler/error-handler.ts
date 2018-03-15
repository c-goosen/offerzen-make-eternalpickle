import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class ErrorHandlerProvider {

  constructor(public alertCtrl: AlertController) {
    console.log('Hello ErrorHandlerProvider Provider');
  }
	
		public displayErrorAlert (error : string) : void  {
		let alert = this.alertCtrl.create({
			title: 'Error!',
			subTitle: error,
			buttons: ['OK']
		});
		alert.present();
	}

}
