import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { files } from '../public-tree/example-data';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
