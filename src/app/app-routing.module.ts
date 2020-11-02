import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingCreateComponent } from './meeting-create/meeting-create.component';
import { MeetingsAttendComponent } from './meetings-attend/meetings-attend.component';
import { MeetingsListComponent } from './meetings-list/meetings-list.component';

const routes: Routes = [
  { path : '', pathMatch: 'full', component : MeetingsListComponent },
  { path : 'attend/:id', component : MeetingsAttendComponent },
  { path : 'create', component : MeetingCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
