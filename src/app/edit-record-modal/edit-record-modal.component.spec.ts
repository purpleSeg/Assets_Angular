import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecordModalComponent } from './edit-record-modal.component';

describe('EditRecordModalComponent', () => {
  let component: EditRecordModalComponent;
  let fixture: ComponentFixture<EditRecordModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecordModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
