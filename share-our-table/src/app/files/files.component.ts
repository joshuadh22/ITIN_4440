import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PublicOrPrivateComponent } from './selector/dialog.component';


@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})

export class FilesComponent implements OnInit {



  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openPubicPrivateSelector(): void {
    let dialogRef = this.dialog.open(PublicOrPrivateComponent, {
      width: '40vw',
      height: '30vw',
    });
  }
}
