import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { InfoForm } from '../acount-creation/info-form/info-form.component';

import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
      const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
  
      return (invalidCtrl || invalidParent);
    }
}

@Component({
  selector: 'sign-up-files',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUp implements OnInit {

  myForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  agree: boolean;

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<SignUp>, private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['']
    }, { validator: this.checkPasswords });
  }
    
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  signUpClose(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  openInfoForm(): void {
    let dialogRef = this.dialog.open(InfoForm, {
      width: '50vw',
      height: '43vw',
    });

    this.dialogRef.close();
  }

}

