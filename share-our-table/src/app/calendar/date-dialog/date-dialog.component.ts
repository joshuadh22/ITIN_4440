import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateDialogData } from '../calendar.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-date-dialog',
  templateUrl: './date-dialog.component.html',
  styleUrls: ['./date-dialog.component.scss']
})
export class DateDialogComponent implements OnInit {
  allDay = false;
  date = new FormControl(new Date());

  constructor(public dialogRef: MatDialogRef<DateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DateDialogData) { }

  ngOnInit(): void {
    this.data.title = '';
    this.data.allDay = false;
    this.data.endDate = '';
    this.data.endTime = '';
    this.data.startDate = '';
    this.data.startTime = '';
  }

  allDayFunc() {
    this.data.startTime = '00:00';
    this.data.endTime = '00:00';
    this.data.endDate = this.data.startDate;
  }

  save() {
    if (this.data.allDay)
    {
      this.data.startTime = '00:00';
      this.data.endTime = '00:00';
      this.data.endDate = this.data.startDate;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
