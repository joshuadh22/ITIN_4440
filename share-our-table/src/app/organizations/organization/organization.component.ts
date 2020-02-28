import { Component, OnInit } from '@angular/core';
import { ORGANIZATIONS } from '../../mock-organizations';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  organizations = ORGANIZATIONS;
  constructor() { }

  ngOnInit(): void {
  }

}
