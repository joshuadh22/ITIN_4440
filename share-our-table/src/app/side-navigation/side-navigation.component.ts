import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  selected = 'System icons';
  constructor() { }

  public setSelected(selection: string) {
    this.selected = selection;
  }

  ngOnInit(): void {
  }

}
