import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
//import { SessionRouteActivator } from './sessionsRouteActivator.service';
import { MatSelectModule } from '@angular/material/select';
import { BookingFormComponent } from './bookingForm.component';
import { Calendar } from './calendar.component';
import { appRoutes } from './routes';
import { VisitListComponent } from './visit-list.component';
import { NavBar } from './navBar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { VisitAppComponent } from './visit-app.component';
import { VisitService } from './shared/visits.service';
import { RouterModule } from '@angular/router';
import { VisitsThumbnailComponent } from './visit-thumbnail.component';
import { VisitDetailsComponent } from './visit.details.component';
import { VisitRouteActivator } from './visitsRouteActivator.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationComponent } from './confirmation/confirmation.component';


@NgModule({
  declarations: [
    VisitAppComponent,
    NavBar,
    VisitListComponent,
    VisitsThumbnailComponent,
    VisitDetailsComponent,
    Calendar,
    BookingFormComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule

  ],
  providers: [VisitService, VisitRouteActivator],
  bootstrap: [VisitAppComponent]
})

export class AppModule { }


