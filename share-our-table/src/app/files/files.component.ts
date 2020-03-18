import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PublicDialogComponent } from 'src/app/files/upload-screen-dialog/dialog.component';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

interface testAuth
{
  userType: string,
}

@Component({
  selector: 'app-files',

  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})

export class FilesComponent implements OnInit {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog, private afs: AngularFirestore)
  {
    this.upload = false;
    this.afs.doc<testAuth>('users/testAuth').valueChanges().subscribe(complete => this.setupload(complete));
    this.afs.doc<testAuth>('users/testAuth').valueChanges().subscribe(complete => this.setprivateTab(complete));
  }

  upload: Boolean;
  setupload(user: testAuth)
  {
    if (user.userType == 'public')
    {
      this.upload = false;
    }
    else
    {
      this.upload = true;
    }
  }

  privateTab: Boolean;
  setprivateTab(user: testAuth)
  {
    if (user.userType == 'exec')
    {
      this.privateTab = true;
    }
    else
    {
      this.privateTab = false;
    }
  }

  ngOnInit(): void {
  }

  openPublicUploader(): void {
    let dialogRef = this.dialog.open(PublicDialogComponent, {
      width: '50vw',
      height: '40vw',
    });
  
  }

}
