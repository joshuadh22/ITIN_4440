import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

import { Organization } from '../../organization';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})

export class OrganizationComponent implements OnInit
{
  private orgCollection: AngularFirestoreCollection<Organization>;
  organizations: Observable<Organization[]>;

  orgName: string;
  setOrgName(newOrgName: string)
  {
    this.orgName = newOrgName;
  }

  constructor(private route: ActivatedRoute, private afs: AngularFirestore)
  {
    this.route.params.subscribe(params => this.setOrgName(params.name));

    this.orgCollection = afs.collection<Organization>('organizations', ref => ref.where('name', '==', this.orgName));
    this.organizations = this.orgCollection.valueChanges();
  }

  edit: Boolean = false;
  user: String = 'exec';

  setOrg(link: string, contactInfo: string, description: string)
  {
    this.afs.doc<Organization>('organizations/' + this.orgName).update({link: link, contactInfo: contactInfo, description: description});
  }

  //Waiting on UI to complete an add an org page
  newOrg(nameIn: string, contactInfoIn: string, descriptionIn: string, imageIn: string, linkIn: string)
  {
    this.orgCollection.add({name: nameIn, contactInfo: contactInfoIn, description: descriptionIn, image: imageIn, link: linkIn})
  }

  ngOnInit() { }

}
