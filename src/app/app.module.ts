import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp, FormatTimePipe } from './app.component';

import { CountryPage } from '../pages/countries/countries';
import { SettingPage } from '../pages/settings/settings';
import { StadiumPage } from '../pages/stadium/stadium';
import { GroupPage } from '../pages/group/group';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    StadiumPage,
    GroupPage,
    HomePage,
    CountryPage,
    SettingPage,
    TabsPage,
    FormatTimePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StadiumPage,
    GroupPage,
    HomePage,
    CountryPage,
    SettingPage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
