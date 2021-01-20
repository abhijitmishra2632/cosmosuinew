import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListonlywhatsappComponent } from './listonlywhatsapp.component';

describe('ListonlywhatsappComponent', () => {
  let component: ListonlywhatsappComponent;
  let fixture: ComponentFixture<ListonlywhatsappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListonlywhatsappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListonlywhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
