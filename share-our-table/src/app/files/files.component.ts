import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import 'firebase/storage';

import { PublicOrPrivateComponent } from './selector/dialog.component';


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
  constructor(public dialog: MatDialog) { }

  user: string = 'exec';

  ngOnInit(): void {
  }

  onUpload(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(PublicOrPrivateComponent, {
      width: '50vw',
      height: '33vw',
      data: { name: this.name, animal: this.animal }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      this.onUpload(name);
    });
    
  }
}
