import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { PublicDialogComponent } from 'src/app/files/public-directory-dialog/dialog.component';
import { PrivateDialogComponent } from 'src/app/files/private-directory-dialog/dialog.component';

@Component({
  selector: 'public-private-selector-dialog',
  template: `
  <input type="file" (change)="uploadFile($event)">
  `,
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class PublicOrPrivateComponent implements OnInit {
  animal: string;
  name: string;
  
  action:string = "Dismiss";

  constructor(public dialogRef: MatDialogRef<PublicOrPrivateComponent>, public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openPublicUploader(): void {
    let dialogRef = this.dialog.open(PublicDialogComponent, {
      width: '50vw',
      height: '38vw',
    });
   
    this.onNoClick();
  }

  openPrivateUploader(): void {
    let dialogRef = this.dialog.open(PrivateDialogComponent, {
      width: '50vw',
      height: '38vw',
    });
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
