import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlanetsServiceProvider } from '../../providers/planets-service/planets-service';


@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
  providers: [PlanetsServiceProvider]

})
export class ItemPage {
  person: { homeworld: string };
  planet: object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public planetsService: PlanetsServiceProvider) {
    this.person = navParams.data.person;
    planetsService.load(this.person.homeworld)
      .then(data => {
        console.log(data)
        this.planet = data;
      });
  }
}
