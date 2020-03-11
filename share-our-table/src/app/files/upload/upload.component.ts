import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  uploadItem;
  fileUploaded: boolean = false;
  message: string;
  action: string = "Dismiss";

  constructor(private storage: AngularFireStorage, private db: AngularFirestore, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.startUpload();
  }

  /**
   * This is a call that pushes the file to the database, along with any user defined metadata.
   * If user does not define metadata its set to "default".
   */
  startUpload() {
    const path = `${this.folder}/${Date.now()}_${this.file.name}`;
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, this.file, {
      customMetadata: {
        title: this.file.name,
        description: this.description
      }
    });

    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        this.db.collection(this.folder).add({ downloadURL: this.downloadURL, path });
      }),
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}