import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingsServiceService {

  public getMeetings(): Observable<Array<Meeting>> {

    const meetings: Array<Meeting> = [];

    meetings.push({id: 1, title: 'Concert', date: new Date(Date.parse('01.01.2020')), numberOfAttendencies: 100});
    meetings.push({id: 2, title: 'Lecture', date: new Date(Date.parse('02.01.2020')), numberOfAttendencies: 10});
    meetings.push({id: 3, title: 'Football Match', date: new Date(Date.parse('04.01.2020')), numberOfAttendencies: 1000});

    return of(meetings);
  }
  constructor() { }


}

export class Meeting {
  public id: number;
  public title: string;
  public date: Date;
  public numberOfAttendencies: number;
}
