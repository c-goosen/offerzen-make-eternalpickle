import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DialogflowHandlerProvider } from '../../providers/dialogflow-handler/dialogflow-handler';
import { ErrorHandlerProvider } from '../../providers/error-handler/error-handler';
import { Platform } from 'ionic-angular';

declare var ApiAIPromises: any;


@Component({
	selector: 'page-about',
	templateUrl: 'about.html',
	providers: [DialogflowHandlerProvider, ErrorHandlerProvider],
})
export class AboutPage {
	public answer;
	public error : string;

	constructor(public navCtrl: NavController, public dialogflowHandlerProvider : DialogflowHandlerProvider, public errorHandlerProvider : ErrorHandlerProvider, public platform: Platform, public ngZone: NgZone) {
		platform.ready().then(() => {

			ApiAIPromises.init({
				clientAccessToken: "a19275bbabb14f4198472f12ef06339d"
			})
				.then((result) =>  console.log(result))

		});
	}

	ask(question) {
		ApiAIPromises.requestText({
			query: question
		})
			.then(({result: {fulfillment: {speech}}}) => {
			this.ngZone.run(()=> {
				this.answer = speech;
			});
		})
	}

	GetHelperTask(id : string) {
//		this.dialogflowHandlerProvider.GetHelperTask(id)
//			.subscribe(
//			task => { 
//
//
//			},  
//			error =>  this.error = <any>error,
//			() => {
//				console.log('Tasks Data Downloaded');
//			}
//		); 
	}

}
