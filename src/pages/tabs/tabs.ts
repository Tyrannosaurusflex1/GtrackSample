import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ExercisesPage } from '../exercises/exercises';
import { SessionsPage } from '../sessions/sessions';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SessionsPage;
  // tab2Root = AboutPage;
  tab3Root = ExercisesPage;

  constructor() {

  }
}
