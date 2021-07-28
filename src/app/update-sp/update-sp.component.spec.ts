import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSPComponent } from './update-sp.component';

describe('UpdateSPComponent', () => {
  let component: UpdateSPComponent;
  let fixture: ComponentFixture<UpdateSPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
