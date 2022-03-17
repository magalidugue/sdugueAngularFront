import { appRoutes } from './routes';
import { VisitListComponent } from './visit-list.component';
import { NavBar } from './navBar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { VisitAppComponent } from './visit-app.component';
import { VisitService } from './shared/visits.service';
import { RouterModule } from '@angular/router';
import { VisitsThumbnailComponent } from './visit-thumbnail.component';

@NgModule({
  declarations: [
    VisitAppComponent,
    NavBar,
    VisitListComponent,
    VisitsThumbnailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [VisitService],
  bootstrap: [VisitAppComponent]
})

export class AppModule { }


