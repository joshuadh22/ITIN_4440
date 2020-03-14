import { Component, OnInit, Injectable, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

import { File } from '../../file';

export interface orgDataDialog {
  name: string;
  description: string;
  link: string;
  image: string;
}

@Component({
  selector: 'private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})

@Injectable()
export class PrivateComponent
{
  name: string;
  description: string;
  link: string;
  image: string;
  private fileCollection: AngularFirestoreCollection<File>;
  files: Observable<File[]>;

  constructor(private afs: AngularFirestore,public dialog: MatDialog)
  {
    this.fileCollection = afs.collection<File>('privateFiles');
    this.files = this.fileCollection.valueChanges();
  }
 
  ngOnInit(): void { 
  }

}
