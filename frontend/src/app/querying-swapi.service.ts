import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment'


@Injectable()
export class QueryingSwapiService {
  constructor(private http: Http) {}

  makeQuery(){
    return this.http.get(`https://swapi.co/api/${category}/?search=${input}`)
    .pipe(map((res) => res.json()));
  }

  getList() {
    return this.http.get(`${environment.BASE_URL}/api/queries`)
      .pipe(map((res) => res.json()));
  }

  get(id) {
    return this.http.get(`${environment.BASE_URL}/api/queries/${id}`)
      .pipe(map((res) => res.json()));
  }

  edit(phone) {
    return this.http.put(`${environment.BASE_URL}/api/queries/${phone.id}`, phone)
      .pipe(map((res) => res.json()));
  }

  remove(id) {
    return this.http.delete(`${environment.BASE_URL}/api/queries/${id}`)
      .pipe(map((res) => res.json()));
  }
}