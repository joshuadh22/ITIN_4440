import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask, } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection, } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  @Input() file: File;
  @Input() description: string;
  @Input() folder: string;

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL;

  constructor(private storage: AngularFireStorage, private afs: AngularFirestore) {}

  ngOnInit() {
    this.startUpload();
  }

  /**
   * This is a call that pushes the file to the database, along with any user defined metadata.
   * If user does not define metadata its set to "default".
   */
  startUpload() {
    const path = `${this.folder}/${this.file.name}`;
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, this.file, { 
      customMetadata: { 
        title: this.file.name,
        description: this.description
    }});

    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        this.afs.collection(this.folder.toLowerCase().toString() + 'Files').doc(this.file.name).set({
          description: this.description.toString(), 
          downloadURL: this.downloadURL.toString(), 
          title: this.file.name.toString()
        });
      }),
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
