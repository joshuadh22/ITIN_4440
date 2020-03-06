import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from './dialog/dialog.component';

import { FormControl } from '@angular/forms';

import { AngularFireStorage } from '@angular/fire/storage';
import 'firebase/storage';

@Component({
  selector: 'app-files',
  template: `
  <input type="file" (change)="uploadFile($event)">
  `,
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  animal: string;
  name: string;
  files: File[] = [];

  onUpload(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  

  ngOnInit(): void {
  }

  constructor(public dialog: MatDialog, private storage: AngularFireStorage) {}
  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '50vw',
      height: '33vw',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  //uploadFile(event) {
  //  const file = event.target.files[0];
  //  const filePath = './tsquery.JPG';
  //  const task = this.storage.upload(filePath, file);

  //}
}
