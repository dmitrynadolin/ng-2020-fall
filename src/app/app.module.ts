import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetingsListComponent } from './meetings-list/meetings-list.component';
import { MeetingsAttendComponent } from './meetings-attend/meetings-attend.component';
import { CommonModule } from '@angular/common';
import { MeetingCreateComponent } from './meeting-create/meeting-create.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetingsListComponent,
    MeetingsAttendComponent,
    MeetingCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
