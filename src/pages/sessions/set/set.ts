import { Component } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';

@Component({
  selector: 'modal-set',
  templateUrl: 'set.html'
})
export class SetModal {

  constructor(public modalCtrl: ModalController) {

  }

  presentSetData() {
    //  let profileModal = this.modalCtrl.create(Profile, { userId: 8675309 });
    //  profileModal.present();
    console.log("here");
  }

}
