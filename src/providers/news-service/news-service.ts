import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class NewsServiceProvider {
  data: object[];
  apiKey: string;
  
  constructor(public http: HttpClient) {
    this.apiKey = 'c7177247f9c84684880470b7565d7d24';
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    let headers = new HttpHeaders({
      'Content-Type': 'text/plain'
    });
    let opt = {
      headers: headers
    }

    return new Promise(resolve => {
      this.http.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}`,
        opt
      ).subscribe((data: { articles: object[] }) => {
          this.data = data.articles;
          resolve(this.data);
        });
    });
  }
}
