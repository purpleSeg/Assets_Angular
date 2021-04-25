import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordItemCardComponent } from './record-item-card.component';

describe('RecordItemCardComponent', () => {
  let component: RecordItemCardComponent;
  let fixture: ComponentFixture<RecordItemCardComponent>;

  beforeEach(async(() => {
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
