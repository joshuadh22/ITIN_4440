import { Component, OnInit } from '@angular/core';
import { ORGANIZATIONS } from '../../mock-organizations';
import { FormGroup, FormControl } from '@angular/forms';
import { Organization } from 'src/app/organization';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  showEdit:boolean = false;
  organizations = ORGANIZATIONS;
  organization: FormGroup;

  editOrganization(organization: Organization) {
    this.organization = new FormGroup({
      name: new FormControl(organization.name),
      description: new FormControl(organization.description),
      link: new FormControl(organization.link)
    });
  }

  save() {
    let index = this.organizations.findIndex(organization => organization.id === this.organization.value.id);
    this.organizations[index] = this.organization.value;
    this.organization = null;
  }

  cancel() {
    this.organization = null;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
