import { BookingFormComponent } from './bookingForm.component';
import { Routes } from "@angular/router";
import { VisitListComponent } from './visit-list.component';
import { VisitDetailsComponent } from "./visit.details.component";
import { VisitRouteActivator } from "./visitsRouteActivator.service";

export const appRoutes: Routes = [
  { path: 'visites', component: VisitListComponent },
  { path: 'visites/:id', component: VisitDetailsComponent, canActivate: [VisitRouteActivator] },
  { path: 'reservation', component: BookingFormComponent }
]
