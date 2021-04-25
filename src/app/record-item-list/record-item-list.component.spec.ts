import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordItemListComponent } from './record-item-list.component';

describe('RecordItemListComponent', () => {
  let component: RecordItemListComponent;
  let fixture: ComponentFixture<RecordItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
