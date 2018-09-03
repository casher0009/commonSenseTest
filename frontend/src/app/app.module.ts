import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QueryingComponent } from './querying/querying.component';
import { QueryDetailComponent } from './query-detail/query-detail.component';
import { QueryingSwapiService } from './querying-swapi.service';

import { RouterModule, Router } from "@angular/router";
import { routes } from './app.routing';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    QueryingComponent,
    QueryDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [
    QueryingSwapiService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
