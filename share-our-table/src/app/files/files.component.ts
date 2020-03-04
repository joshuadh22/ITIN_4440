import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

import { File } from '../file';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  private fileCollection: AngularFirestoreCollection<File>;
  files: Observable<File[]>;

  constructor(private afs: AngularFirestore)
  { 
    this.fileCollection = afs.collection<File>('privateFiles');
    this.files = this.fileCollection.valueChanges();
  }

  ngOnInit(): void {
  }

}
