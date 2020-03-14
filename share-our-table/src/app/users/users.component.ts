import { Component, OnInit, ViewChild } from '@angular/core';
import { doesNotReject } from 'assert';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

export interface Users {
  userName: string;
  organization: string;
  userType: string;
}

const USER_DATA: Users[] = [
  {userName: "John Doe", organization: "Org1", userType: "Exec"},
  {userName: "Rick Smith", organization: "Org2", userType: "User"},
  {userName: "Jane Cooper", organization: "Org3", userType: "Admin"},
  {userName: "Don Juan", organization: "Org4", userType: "Admin"},
  {userName: "Mike Packer", organization: "Org5", userType: "User"},
  {userName: "Andy Poole", organization: "Org6", userType: "User"},
  {userName: "Don McMurphy", organization: "Org7", userType: "User"},
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['userName', 'organization', 'userType', 'actions'];
  dataSource = new MatTableDataSource(USER_DATA);
  element: any;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  deleteAccount(element)
  {
    if(window.confirm('Are you sure you want to delete ' + element.userName + '\'s account?'))
    {
      // Delete logic here
    }
  }

  archiveAccount(element)
  {
    if(window.confirm('Are you sure you want to archive ' + element.userName + '\'s account?'))
    {
      // Archive logic here
    }
  }

  reenableAccount(element)
  {
    if(window.confirm('Are you sure you want to re-enable ' + element.userName + '\'s account?'))
    {
      // Re-enable logic here
    }
  }

}
