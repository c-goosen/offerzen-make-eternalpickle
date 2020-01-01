//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlerProvider } from '../../providers/error-handler/error-handler';
import 'rxjs/add/observable/of';


@Injectable()
export class DialogflowHandlerProvider {

	private apiUrl = 'http://...';
	public response : any;

	constructor( public errorHandlerProvider : ErrorHandlerProvider) { //public http: HttpClient,
		console.log('Hello DialogflowHandlerProvider Provider');
	}

//	GetHelperTask(taskIdentifier : string): Observable<{}> {
//		return this.http.get(this.apiUrl + taskIdentifier ).pipe(
//			map(this.extractData),
//			catchError(error => {
//				const err = error || '';
//				const errMsg = `Unable to connect to server <br> ${error.status} - ${error.statusText || ''} ${err}`;
//				this.errorHandlerProvider.displayErrorAlert(errMsg);
//				return Observable.of(null);
//			}),
//		);
//	}

//		AcceptTask(taskId : string): Observable<{}> {
//		var apiMethodUrl = "Accept";
//		return this.http.post(this.apiUrl+ `${taskId}/` + apiMethodUrl, {TaskAccepted : true}, { headers: { 'Content-Type': 'application/json' }}).pipe(
//		map(this.response),
//		catchError(error => {
//			const err = error || '';
//			const errMsg = `Unable to connect and post to server <br> ${error.status} - ${error.statusText || ''} ${err}`;
//			this.errorHandlerProvider.displayErrorAlert(errMsg);
//			return Observable.of(null);
//		}));	
//	}
	
	private extractData(res: Response) {
		let body = res;
		return body || { };
	}

}
