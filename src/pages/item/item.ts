import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlanetsServiceProvider } from '../../providers/planets-service/planets-service';
import { GiphyServiceProvider } from '../../providers/giphy-service/giphy-service';


@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
  providers: [PlanetsServiceProvider, GiphyServiceProvider]

})
export class ItemPage {
  person: { homeworld: string, name: string };
  planet: object;
  giphy: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public planetsService: PlanetsServiceProvider, public giphyService: GiphyServiceProvider) {
    this.person = navParams.data.person;
    planetsService.load(this.person.homeworld)
      .then(data => {
        this.planet = data;
      });
    giphyService.load(this.person.name)
      .then(data => {
        console.log(data);
        this.giphy = data.data[0].images.downsized_large.url;
      });
  }
}
