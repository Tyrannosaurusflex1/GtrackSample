import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SetModal } from './set/set';

@Component({
  selector: 'page-sessions',
  templateUrl: 'sessions.html'
})
export class SessionsPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  addSet() {
    let setModal = this.modalCtrl.create(SetModal, { userId: 8675309 });
    setModal.present();
  }

}
