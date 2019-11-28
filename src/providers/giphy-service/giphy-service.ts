import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GiphyServiceProvider {
  data: any;
  constructor(public http: HttpClient) {
    console.log('Hello GiphyServiceProvider Provider');
  }

  load(q) {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let opt = {
      headers: headers
    }

    return new Promise(resolve => {
      const api = '8mD71GurIzyrVAXXEbN8Z74UWrYDR4ul'
      this.http.get(`http://api.giphy.com/v1/gifs/search?api_key=${api}&q=${q}`, opt)
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
