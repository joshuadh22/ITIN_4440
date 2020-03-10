import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicOrPrivateComponent } from './dialog.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

describe('PublicOrPrivateComponent', () => {
  let component: PublicOrPrivateComponent;
  let fixture: ComponentFixture<PublicOrPrivateComponent>;
PublicOrPrivateComponent
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicOrPrivateComponent ],
      imports: [
        MatButtonModule,
        MatIconModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicOrPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
