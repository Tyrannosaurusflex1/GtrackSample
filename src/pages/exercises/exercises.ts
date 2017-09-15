import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PersistencyService } from '../../services/persitence.service';

@Component({
  selector: 'page-exercises',
  templateUrl: 'exercises.html'
})
export class ExercisesPage {

  items = [];

  constructor(public navCtrl: NavController, public storage: PersistencyService) {
    // this.items = storage.ExerciseListing();
  }

}
