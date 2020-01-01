import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Device } from '@ionic-native/device';
//import { HttpClientModule, HttpClient, HttpModule } from '@angular/common/http';
import { RootAPIHandler } from '../providers/root-provider/root-handler';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
// import { HttpClient, HttpHeaders, HttpHandler } from '@angular';
import { HttpClientModule } from '@angular/common/http';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DialogflowHandlerProvider } from '../providers/dialogflow-handler/dialogflow-handler';
import { ErrorHandlerProvider } from '../providers/error-handler/error-handler';
import { rootApi } from './app-settings';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    rootApi,
    // HttpClient,
    RootAPIHandler,
    StatusBar,
    SplashScreen,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // {provide: HttpHandler, useClass: IonicErrorHandler},
    DialogflowHandlerProvider,
    ErrorHandlerProvider,
//	  HttpClient,
//	  HttpClientModule,
	  
  ]
})
export class AppModule {}
