import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleServiceProvider {
  data: any;
  constructor(public http: HttpClient) {
  }

  load() {
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
      this.http.get('https://swapi.co/api/people/', opt)
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
