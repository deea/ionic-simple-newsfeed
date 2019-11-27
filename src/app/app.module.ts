import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { SignInPage } from '../pages/sign-in/sign-in';
import { ItemPage } from '../pages/item/item';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PeopleServiceProvider } from '../providers/people-service/people-service';
import { PlanetsServiceProvider } from '../providers/planets-service/planets-service';
import { GiphyServiceProvider } from '../providers/giphy-service/giphy-service';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    SignInPage,
    ItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    SignInPage,
    ItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PeopleServiceProvider,
    PlanetsServiceProvider,
    GiphyServiceProvider
  ]
})
export class AppModule {}
