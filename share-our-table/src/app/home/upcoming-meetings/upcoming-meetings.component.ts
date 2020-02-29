import { Component, OnInit } from '@angular/core';
import { MEETINGS } from '../../mock-meetings';

@Component({
  selector: 'app-upcoming-meetings',
  templateUrl: './upcoming-meetings.component.html',
  styleUrls: ['./upcoming-meetings.component.scss']
})
export class UpcomingMeetingsComponent implements OnInit {
  meetings = MEETINGS;
  constructor() { }

  ngOnInit(): void {
  }

}
