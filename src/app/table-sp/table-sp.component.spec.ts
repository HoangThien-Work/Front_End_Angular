import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSPComponent } from './table-sp.component';

describe('TableSPComponent', () => {
  let component: TableSPComponent;
  let fixture: ComponentFixture<TableSPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
