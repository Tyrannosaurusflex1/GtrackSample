import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { PersistencyService } from '../../../services/persitence.service';

@Component({
  selector: 'modal-set',
  templateUrl: 'set.html'
})
export class SetModal {

  showList: boolean = false;
  searchQuery: string = '';
  items: string[];

  initItems() {
    this.items = [
      'Amsterdam',
      'Berlin',
      'Bueno Aires',
      'Madrid',
      'Paris'
    ];
  }

  constructor(public viewCtrl: ViewController, public storage: PersistencyService) {
    this.initItems();
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {

      // Filter the items
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });

      // Show the results
      this.showList = true;
    } else {

      // hide the results when the query is empty
      this.showList = false;
    }
  }


  presentSetData() {
    //  let profileModal = this.modalCtrl.create(Profile, { userId: 8675309 });
    //  profileModal.present();
    console.log("here");
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
