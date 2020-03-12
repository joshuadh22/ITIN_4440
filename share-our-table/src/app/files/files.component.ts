import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PublicOrPrivateComponent } from './selector/dialog.component';

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


  openDialog(): void {
    let dialogRef = this.dialog.open(PublicOrPrivateComponent, {
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
