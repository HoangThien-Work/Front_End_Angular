import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSPComponent } from './add-sp.component';

describe('AddSPComponent', () => {
  let component: AddSPComponent;
  let fixture: ComponentFixture<AddSPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
