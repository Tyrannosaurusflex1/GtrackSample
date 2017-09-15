import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SQLite } from '@ionic-native/sqlite';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ExercisesPage } from '../pages/exercises/exercises';
import { SessionsPage } from '../pages/sessions/sessions';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SetModal } from '../pages/sessions/set/set';
import { PersistencyService } from '../services/persitence.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ExercisesPage,
    SessionsPage,
    TabsPage,
    SetModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ExercisesPage,
    SessionsPage,
    TabsPage,
    SetModal
  ],
  providers: [
    SQLite,
    StatusBar,
    SplashScreen,
    PersistencyService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
