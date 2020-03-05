import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';

import { PublicTreeComponent } from './tree.component';

describe('TreeComponent', () => {
  let component: PublicTreeComponent;
  let fixture: ComponentFixture<PublicTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicTreeComponent ],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatTreeModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});