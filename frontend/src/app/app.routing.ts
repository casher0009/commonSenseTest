import { Routes } from "@angular/router";

import { QueryingComponent } from "./querying/querying.component";
import { QueryDetailComponent } from "./query-detail/query-detail.component";

export const routes: Routes = [
  { path: "", component: QueryingComponent },
  { path: "queries/:id", component: QueryDetailComponent },
  { path: "**", redirectTo: "" }
];
