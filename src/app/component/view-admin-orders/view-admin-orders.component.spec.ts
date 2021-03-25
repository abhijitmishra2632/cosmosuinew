import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminOrdersComponent } from './view-admin-orders.component';

describe('ViewAdminOrdersComponent', () => {
  let component: ViewAdminOrdersComponent;
  let fixture: ComponentFixture<ViewAdminOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAdminOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdminOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
