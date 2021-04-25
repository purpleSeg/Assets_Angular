import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecordItem } from 'src/shared/models/record-item.model';

@Component({
  selector: 'app-add-record-form',
  templateUrl: './add-record-form.component.html',
  styleUrls: ['./add-record-form.component.scss']
})
export class AddRecordFormComponent implements OnInit {

  @Input() item: RecordItem;
  @Output() formSubmit: EventEmitter<RecordItem> = new EventEmitter<RecordItem>();

  isNewRecord: boolean;

  constructor() { }

  ngOnInit() {
    // if item has a value
    if (this.item) {
      // this means that an existing item object was passed into this component
      // therefore this is not a new item
      this.isNewRecord = false;
    } else {
      this.isNewRecord = true;
      this.item = new RecordItem('', null, '');
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
