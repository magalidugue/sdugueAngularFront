import { VisitListComponent } from './visit-list.component';
import { NavBar } from './navBar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { VisitAppComponent } from './visit-app.component';

@NgModule({
  declarations: [
    VisitAppComponent,
    NavBar,
    VisitListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [VisitAppComponent]
})
export class AppModule { }
