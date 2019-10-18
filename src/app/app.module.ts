import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventService } from './events/shared/event.service'
import { EventDetails } from './events/event-details/event-details.component'
import { NavBarComponent } from './nav/navbar.component'
import { ToastrService } from './common/toastr.service';
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetails,
    NavBarComponent
  ],  
  providers: [ EventService, ToastrService ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
