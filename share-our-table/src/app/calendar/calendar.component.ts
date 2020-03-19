import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import { MatDialog } from '@angular/material/dialog';
import { DateDialogComponent } from './date-dialog/date-dialog.component';

export interface DateDialogData {
  title: string;
  location: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  allDay: boolean;
  description: string;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  options: any;
  title: string;
  location: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  allDay: boolean;
  description: string;

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  
  constructor(public dialog: MatDialog) { }

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin, listPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    { title: 'Test Event', start: '2020-03-01T13:13:55', end: '2020-03-01T13:19:55', allDay: false, editable: true },
    { title: 'Test Event', start: '2020-03-18T13:13:55', end: '2020-03-18T13:19:55', allDay: false, editable: true },
    { title: 'Test Event', start: '2020-03-19T13:13:55', end: '2020-03-19T13:19:55', allDay: false, editable: true }
  ];

  ngOnInit(): void {
    this.options = {
      editable: true,
      customButtons: {
        addEvent: {
          text: 'Add Event',
          click: () => this.openDialog()
        }
      },
      header: {
        left: 'prev,next today addEvent',
        center: 'title',
        right: 'dayGridMonth,listDay,listWeek,listMonth'
      }
    }
  }


  handleDateClick(arg) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      })
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open
    (DateDialogComponent, {
      width: '500px',
      data: {title: this.title, location: this.location, startDate: this.startDate, startTime: this.startTime, endDate: this.endDate, endTime: this.endTime, allDay: this.allDay, description: this.description}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.title = result.title;
      this.location = result.location;
      this.startDate = result.startDate;
      this.startTime = result.startTime;
      this.endDate = result.endDate;
      this.endTime = result.endTime;
      this.allDay = result.allDay;
      this.description = result.description;
    });
  }
}