import { Component } from '@angular/core';

import { StadiumPage } from '../stadium/stadium';
import { GroupPage } from '../group/group';
import { HomePage } from '../home/home';
import { CountryPage } from '../countries/countries';
import { SettingPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GroupPage;
  tab3Root = StadiumPage;
  tab4Root = CountryPage;
  tab5Root = SettingPage;
  constructor() {

  }
}
