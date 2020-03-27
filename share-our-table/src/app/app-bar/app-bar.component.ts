import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SignUp } from '../acount-creation/sign-up.component';
import { LoginComponent } from '../login/login.component';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

interface testAuth
{
  userType: string,
}

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {
  
  constructor(public dialog: MatDialog, private afs: AngularFirestore) 
  {
    this.afs.doc<testAuth>('users/testAuth').valueChanges().subscribe(complete => this.setLog(complete));
  }

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

  logIn: Boolean;
  loging: Boolean = true;
  setLog(user: testAuth)
  {
    this.loging = true;
    if (user.userType == 'public')
    {
      this.logIn = false;
    }
    else
    {
      this.logIn = true;
    }
  }
}
