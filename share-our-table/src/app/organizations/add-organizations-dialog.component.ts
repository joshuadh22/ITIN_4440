import { Component, OnInit } from '@angular/core';
//import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Organization } from '../organization';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-organizations',
  templateUrl: './add-organizations-dialog.component.html',
  styleUrls: ['./add-organizations-dialog.component.scss']
})

export class AddOrganizationsDialogComponent implements OnInit {
  message:string;
  action:string = "Dismiss";
  fileUploaded = false;
  private orgCollection: AngularFirestoreCollection<Organization>;
  orgName: string;

  constructor(private _snackBar: MatSnackBar, private afs: AngularFirestore)
  { 
    this.orgCollection = afs.collection<Organization>('organizations', ref => ref.where('name', '==', this.orgName));
  }

  //still need to bring in the image
  save(nameIn: string, contactInfoIn: string, descriptionIn: string, linkIn: string) {

    //this.orgCollection.add({name: nameIn, contactInfo: contactInfoIn, description: descriptionIn, image: imageIn, link: linkIn})

    this.afs.collection("organizations").doc(nameIn).set({
      name: nameIn,
      contactInfo: contactInfoIn,
      description: descriptionIn,
      //image: imageIn,
      link: linkIn,
  })
  }


  ngOnInit(): void {
  }
}
