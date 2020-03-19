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
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
