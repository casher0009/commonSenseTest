import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { QueryingSwapiService } from '../querying-swapi.service';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-querying',
  templateUrl: './querying.component.html',
  styleUrls: ['./querying.component.css'],
  providers: [QueryingSwapiService],
})
export class QueryingComponent implements OnInit {
  queries;

  constructor(private query: QueryingSwapiService, private http: Http) { }

  ngOnInit() {
    this.query.getList()
    .subscribe((queries) => {
      this.queries = queries;
    })
  }

  makeQuery(){
    const app = this.http.get(`https://swapi.co/api/${category}/?search=${input}`);
    return app
    .pipe(map((res) => res.json()));




  }

  


}
