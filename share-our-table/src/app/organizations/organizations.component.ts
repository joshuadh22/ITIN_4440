import { Component, Injectable, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

import { Organization } from '../organization';

export interface orgDataDialog {
  name: string;
  description: string;
  link: string;
  image: string;
}

@Component({
  selector: 'organizations',
  templateUrl: 'organizations.component.html',
  styleUrls: ['organizations.component.scss']
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
  }
 
  ngOnInit(): void { 
  }

  user: string = 'exec';

  openDialog(): void {
    const dialogRef = this.dialog.open(AddOrganizationsDialog, {
      width: '50vw',
      height: '38vw',
      data: {name: this.name, description: this.description, link: this.link, image: this.image}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result.name;
      this.description = result.description;
      this.link = result.link;
      this.image = result.image;
      console.log(result);
   });
  }
}

@Component({
  selector: 'add-organizations-dialog',
  templateUrl: 'add-organizations-dialog.html',
  styleUrls: ['add-organizations-dialog.scss']
})
export class AddOrganizationsDialog {
  constructor(public dialogRef: MatDialogRef<AddOrganizationsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: orgDataDialog) {}
    
    onNoClick(): void {
      this.dialogRef.close(this.data);
    }
}
