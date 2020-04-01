import { Component, Injectable } from '@angular/core';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

import { AngularFireStorage, AngularFireUploadTask, } from '@angular/fire/storage';

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
    alert("delete public hit");



    this.afs.collection("publicFiles").doc(file.title).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });

    // Create a reference to the file to delete
    // var desertRef = this.storage.rechild('images/desert.jpg');
    var ref = this.storage.ref("/Public");
    ref.child(file.title).delete().then(function () {
    }).catch(function (error) {
      // Uh-oh, an error occurred!
    });

  }

}
