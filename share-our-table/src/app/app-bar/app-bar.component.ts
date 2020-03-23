import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SignUp } from '../acount-creation/sign-up.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {
  
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openSignUp(): void {
    let dialogRef = this.dialog.open(SignUp, {
      width: '50vw',
      height: '43vw',
    });
  }

  openLogin(): void {
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '50vw',
      height: '43vw',    
    });
  }
}
