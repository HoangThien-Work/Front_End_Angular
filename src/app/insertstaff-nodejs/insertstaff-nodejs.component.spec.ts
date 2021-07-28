import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertstaffNodejsComponent } from './insertstaff-nodejs.component';

describe('InsertstaffNodejsComponent', () => {
  let component: InsertstaffNodejsComponent;
  let fixture: ComponentFixture<InsertstaffNodejsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertstaffNodejsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertstaffNodejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
