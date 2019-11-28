import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemPage } from '../item/item';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';
import { GiphyServiceProvider } from '../../providers/giphy-service/giphy-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [PeopleServiceProvider, GiphyServiceProvider]
})
export class ListPage {
  selectedItem: any;
  peopleData: object[];
  giphy: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public peopleService: PeopleServiceProvider) {
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
