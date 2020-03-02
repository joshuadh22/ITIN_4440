import { Component, OnInit, Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

import { Organization } from '../organization';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})

@Injectable()
export class OrganizationsComponent
{
  private orgCollection: AngularFirestoreCollection<Organization>;
  organizations: Observable<Organization[]>;

  constructor(private afs: AngularFirestore)
  {
    this.orgCollection = afs.collection<Organization>('organizations');
    this.organizations = this.orgCollection.valueChanges();
  }

  ngOnInit(): void { }
}
