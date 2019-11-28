import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GiphyServiceProvider } from '../../providers/giphy-service/giphy-service';

@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
  providers: [GiphyServiceProvider]
})

export class ItemPage {
  news: { title: string };
  giphy: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public giphyService: GiphyServiceProvider) {
    console.log(navParams);
    this.news = navParams.data.news;
    giphyService.load(this.news.title)
      .then(data => {
        this.giphy = data.data[0].images.downsized_large.url;
      });
  }
}
