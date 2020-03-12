import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import { PublicOrPrivateComponent } from './selector/dialog.component';


@Component({
  selector: 'app-files',

  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})

export class FilesComponent implements OnInit {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  user: string = 'exec';

  ngOnInit(): void {
  }

 
  openDialog(): void {
    let dialogRef = this.dialog.open(PublicOrPrivateComponent, {
      width: '50vw',
      height: '33vw',
      data: { name: this.name, animal: this.animal }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
   
    });
    
  }
}
