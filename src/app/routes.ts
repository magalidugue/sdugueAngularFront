import { Routes } from "@angular/router";
import { VisitListComponent } from './visit-list.component';
import { VisitDetailsComponent } from "./visit.details.component";
import { VisitRouteActivator } from "./visitsRouteActivator.service";

export const appRoutes: Routes = [
  {path: 'visits', component: VisitListComponent},
  { path: 'visits/:id', component: VisitDetailsComponent, canActivate: [VisitRouteActivator]  },
]
