import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodestaffComponent } from './nodestaff.component';

describe('NodestaffComponent', () => {
  let component: NodestaffComponent;
  let fixture: ComponentFixture<NodestaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodestaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodestaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
