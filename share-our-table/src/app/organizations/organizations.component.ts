import { Component, OnInit, Injectable, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

interface testAuth
{
  userType: string,
}

import { Organization } from '../organization';
//import { DialogComponent } from '../files/dialog/dialog.component';
import { AddOrganizationsDialogComponent } from './add-organizations-dialog.component';

export interface orgDataDialog {
  name: string;
  description: string;
  link: string;
  image: string;
}

@Component({
  selector: 'add-organizations-dialog',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})

@Injectable()
export class OrganizationsComponent
{
  name: string;
  description: string;
  link: string;
  image: string;
  private orgCollection: AngularFirestoreCollection<Organization>;
  organizations: Observable<Organization[]>;

  constructor(private afs: AngularFirestore,public dialog: MatDialog)
  {
    this.orgCollection = afs.collection<Organization>('organizations');
    this.organizations = this.orgCollection.valueChanges();

    this.plus = false;
    this.afs.doc<testAuth>('users/testAuth').valueChanges().subscribe(complete => this.setplus(complete));
  }

  plus: Boolean;
  setplus(user: testAuth)
  {
    if (user.userType == 'exec')
    {
      this.plus = true;
    }
    else
    {
      this.plus = false;
    }
  }

  ngOnInit(): void {
  }
//}

  //@Component({
   // selector: 'add-organizations-dialog',
    //templateUrl: 'add-organizations-dialog.component.html',
    //styleUrls: ['add-organizations-dialog.component.scss']
  //})
  //export class AddOrganizationsDialog implements OnInIt {
    //name: string;
    //description: string;
    //link: string;
    //image: string;

  user: string = 'exec';

  openDialog(): void {
    const dialogRef = this.dialog.open(AddOrganizationsDialogComponent, {
      width: '50vw',
      height: '38vw',
      data: {name: this.name, description: this.description, link: this.link, image: this.image}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
   });
}
}
