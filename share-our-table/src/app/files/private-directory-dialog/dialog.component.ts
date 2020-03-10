import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class PrivateDialogComponent implements OnInit {
  message:string;
  action:string = "Dismiss";
  fileUploaded = false;

  constructor(private _snackBar: MatSnackBar) { }

  save() {
    if (this.fileUploaded === true)
    {
      this.message = 'File uploaded successfully!';
    }
    else
    {
      this.message = 'File upload failed. Please try again.'
    }
    this._snackBar.open(this.message, this.action, {
      duration: 5000,
    });
  }

  ngOnInit(): void {
  }

  countries: any = [
    {
      full: "Great Britain",
      short: "GB"
    },
    {
      full: "United States",
      short: "US"
    },
    {
      full: "Canada",
      short: "CA"
    }
  ];
  
  selectedCountry: string = "GB";
  
  selectedCountryControl = new FormControl(this.selectedCountry);

}
