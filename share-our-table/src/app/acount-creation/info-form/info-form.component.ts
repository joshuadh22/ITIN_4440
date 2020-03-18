import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

import { Organization } from 'src/app/organization' 

export interface orgData {
    name: string;
}


@Component({
  selector: 'info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.scss']
})

export class InfoForm implements OnInit {
    selectedValue: string;
    name: string;
    private orgCollection: AngularFirestoreCollection<Organization>;
    organizationCollection: Organization[];
    organizations: Observable<Organization[]>;


    constructor(public dialogRef: MatDialogRef<InfoForm>, private afs: AngularFirestore) {
        this.orgCollection = afs.collection<Organization>('organizations');
        this.organizations = this.orgCollection.valueChanges();
    }
    
    infoFormClose(): void {
        this.dialogRef.close();
    }

    ngOnInit(): void {}

}

