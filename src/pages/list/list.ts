import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemPage } from '../item/item';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [PeopleServiceProvider]
})
export class ListPage {
  selectedItem: any;
  peopleData: object[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public peopleService: PeopleServiceProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    peopleService.load()
    .then(data => {
      this.peopleData = data.results;
    })
    // this.selectedItem = navParams.get('item');
  }

  personTapped(event, person) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ItemPage, {
      person: person
    });
  }
}
