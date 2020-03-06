import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { files } from '../private-tree/example-data';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  message: string;
  action: string = "Dismiss";
  fileUploaded = false;
  files: File[] = [];

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onUpload(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  save() {
    if (this.fileUploaded === true) {
      this.message = 'File uploaded successfully!';
    }
    else {
      this.message = 'File upload failed. Please try again.'
    }
    this._snackBar.open(this.message, this.action, {
      duration: 5000,
    });
  }

  file = files

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
