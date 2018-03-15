//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError, mapTo } from 'rxjs/operators';
import { ErrorHandlerProvider } from '../../providers/error-handler/error-handler';
import { rootApi } from '../../app/app-settings';
import 'rxjs/add/observable/of';
// import { Clien } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http,Headers,RequestOptions } from '@angular/http';


@Injectable()
export class RootAPIHandler {

	public response : any;

    constructor(
         public errorHandlerProvider : ErrorHandlerProvider,
         private http: HttpClient,
         private rootDetails: rootApi,
        //  private rootapi : Roo
    ) { //public http: HttpClient,
		console.log('Hello DialogflowHandlerProvider Provider');
    }

    GetPhoneEstimate(phoneModel : string): Observable<{}> {
        console.log("FIRE request!")
                // var apiMethodUrl = "Accept";
                
                var headersObj = new HttpHeaders();
                headersObj.append('Content-Type', 'application/json');
                headersObj.append('Authorization', 'Basic' + this.rootDetails.apiKey + ": ");
                // var headersObj = { 'Content-Type': 'application/json' }
                // headersObj.append()
                var url = this.rootDetails.apiUrl + "quotes/";
                console.log("Firing at:");
                console.log(url);
                // console.log(JSON.stringify(headersObj, null,4));
                var headers = { headers : {"authorization": `Basic ${btoa(this.rootDetails.apiKey)}`},
                // var headers = { headers : {authorization: 'Basic c2FuZGJveF9OVEprTUdNek4yRXRObU5pTlMwMFpUWTFMV0V5TTJZdE1HUTJZemt6TldZNVptTTNMalZ6VUZkQk4xUlpjazQyV0hCUWJHMVNObEZRVVMxUFNrZGpVRU5zU2xGVDo='}};
                "content-type": "application/json"};
                console.log("HEADERS");
                console.log(headers);
                console.log(JSON.stringify(headers,null,4));
                var payload = { type: 'root_gadgets', model_name: 'iPhone 6s 64GB LTE' };
                return this.http.post(url, payload, headers).pipe(
        		// map(this.response),
        		catchError(error => {
        			// const err = error || '';
        			// const errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
                    // this.errorHandlerProvider.displayErrorAlert(errMsg);
                    console.log(JSON.stringify(error,null,4));
        			return Observable.of(null);
                })
            );	
                // return request
        	}
    
}