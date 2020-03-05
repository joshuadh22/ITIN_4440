import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from './dialog/dialog.component';

import { FormControl } from '@angular/forms';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';


@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {


  private fileCollection: AngularFirestoreCollection<File>;
  files: Observable<File[]>;

  constructor(private afs: AngularFirestore, public dialog: MatDialog)
  { 
    this.fileCollection = afs.collection<File>('privateFiles');
    this.files = this.fileCollection.valueChanges();
  }

  ngOnInit(): void {
  }

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
}
