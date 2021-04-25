import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecordFormComponent } from './add-record-form.component';

describe('AddRecordFormComponent', () => {
  let component: AddRecordFormComponent;
  let fixture: ComponentFixture<AddRecordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
