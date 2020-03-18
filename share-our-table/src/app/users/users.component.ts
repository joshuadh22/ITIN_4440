import { Component, OnInit, ViewChild } from '@angular/core';
import { doesNotReject } from 'assert';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import {ConfirmDialogModel, ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {MatPaginator} from '@angular/material/paginator';

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
  result: boolean;
  message: string;
  userType: string;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(public dialog: MatDialog) { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }


  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  deleteAccount(element)
  {
    const message = 'Are you sure you want to delete ' + element.userName + '\'s account?';
    this.confirmDialog(message);
    if (this.result)
    {
      // Delete logic here
    }
  }

  archiveAccount(element)
  {
    const message = 'Are you sure you want to archive ' + element.userName + '\'s account?';
    this.confirmDialog(message);
    if (this.result)
    {
      // Archive logic here
    }
  }

  reenableAccount(element)
  {
    const message = 'Are you sure you want to re-enable ' + element.userName + '\'s account?';
    this.confirmDialog(message);
    if (this.result)
    {
      // Re-enable logic here
    }
  }

  changeUserType(element) 
  {
    const message = 'Are you sure you want to change ' + element.userName + '\'s user type to ' + element.userType + '?';
    this.confirmDialog(message);
    if (this.result)
    {
      // Re-enable logic here
    }
  }

  confirmDialog(message): void {
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { maxWidth: "500px", data: dialogData});
    dialogRef.afterClosed().subscribe(dialogResult => {this.result = dialogResult;});
  }

}
