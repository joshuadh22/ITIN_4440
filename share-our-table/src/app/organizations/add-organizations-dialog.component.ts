import { Component, OnInit } from '@angular/core';
//import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-organizations',
  templateUrl: './add-organizations-dialog.component.html',
  styleUrls: ['./add-organizations-dialog.component.scss']
})

export class AddOrganizationsDialogComponent implements OnInit {
  message:string;
  action:string = "Dismiss";
  fileUploaded = false;

  constructor(private _snackBar: MatSnackBar) { }


  save() {

  //   if (this.fileUploaded === true)
  //   {
  //     this.message = 'Organization Creation successfull!';
  //   }
  //   else
  //   {
  //     this.message = 'Organization Creation Failed! Please try again.'
  //   }
  }
  // }

  ngOnInit(): void {
  }
}
