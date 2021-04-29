import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RecordItemCardComponent } from './record-item-card.component';

describe('RecordItemCardComponent', () => {
  let component: RecordItemCardComponent;
  let fixture: ComponentFixture<RecordItemCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
