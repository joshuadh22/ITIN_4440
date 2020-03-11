import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class PublicDialogComponent implements OnInit {
  message:string;
  action:string = "Dismiss";
  fileUploaded = false;
  files: File[] = [];
  selectedFiles :File[] = []  // A work around to upload when save is pressed.
  description: string = "defualt";
 
  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) { }

  /**
   * Saves the selected files to a temparary variable when slected.
   * This is done to allow description metadata to be added before pushing to firebase storage.
   * @param files - the files a user has selected form the dialog window.
   */
  setUpload(filesIn: FileList) {
    for (let i = 0; i < filesIn.length; i++) {
      this.selectedFiles.push(filesIn.item(i));
    }
  }

  /**
   * Pushes the files the user selected to an array of files that 
   * will be sent to an upload component. Additionally this method has some error messages.
   */
  save(descriptionIn: string) {
    if (this.selectedFiles != null) {
      this.files = this.selectedFiles;
      this.description = descriptionIn;
      this.fileUploaded = true;
    }

    if (this.fileUploaded === true) {  
      this.message = 'File uploaded successfully!';
    }
    else {
      this.message = 'File upload failed. Please try again.'
    }
    this._snackBar.open(this.message, this.action, {
      duration: 5000,
    });
    this.dialog.closeAll();
  }

  ngOnInit(): void {
  }
  
  // file = files
}
