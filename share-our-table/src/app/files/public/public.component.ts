import { Component, Injectable } from '@angular/core';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask, } from '@angular/fire/storage';
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
  selector: 'public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})

@Injectable()
export class PublicComponent {
  name: string;
  description: string;
  link: string;
  image: string;
  private fileCollection: AngularFirestoreCollection<File>;
  files: Observable<File[]>;

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL;

  constructor(private storage: AngularFireStorage, private afs: AngularFirestore, public dialog: MatDialog) {
    this.fileCollection = afs.collection<File>('publicFiles');
    this.files = this.fileCollection.valueChanges();
  }

  ngOnInit(): void {
  }

  delete(file: File) {
    this.afs.collection("publicFiles").doc(file.title).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });

    var ref = this.storage.ref("/Public");
    ref.child(file.title).delete().then(function () {
    }).catch(function (error) {
      alert("delete error");
    });
  }
}
