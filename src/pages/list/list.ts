import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemPage } from '../item/item';
import { NewsServiceProvider } from '../../providers/news-service/news-service';
import { GiphyServiceProvider } from '../../providers/giphy-service/giphy-service';

type NewsData = { title: string, source: { name: string }, urlToImage: string }[];

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [NewsServiceProvider, GiphyServiceProvider]
})
export class ListPage {
  newsData: NewsData;

  constructor(public navCtrl: NavController, public navParams: NavParams, public newsService: NewsServiceProvider, public giphyService: GiphyServiceProvider) {
    newsService.load()
    .then((data: NewsData) => {
      console.log(data)
      this.newsData = data;
    })
  }

  newsTapped(event, news) {
    this.navCtrl.push(ItemPage, {
      news: news
    });
  }
}
