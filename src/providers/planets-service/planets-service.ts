import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PlanetsServiceProvider {
  data: any
  constructor(public http: HttpClient) {
  }
  load(url) {
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
      this.http.get(url, opt)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }
}
