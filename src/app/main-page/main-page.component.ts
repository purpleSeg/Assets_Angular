import { Component, OnInit } from '@angular/core';
import { RecordItem } from 'src/shared/models/record-item.model';
import { UpdateEvent } from '../record-item-list/record-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  recordItems: RecordItem[] = new Array<RecordItem>();
  totalRecord: number = 0;

  constructor() { }

  ngOnInit() {
  }

  addItem(newItem: RecordItem) {
    this.recordItems.push(newItem);
    this.totalRecord += newItem.amount;
  }

  deleteItem(item: RecordItem) {
    let index = this.recordItems.indexOf(item);
    this.recordItems.splice(index, 1);
    this.totalRecord -= item.amount;
  }

  updateItem(updateEvent: UpdateEvent) {
    // result is the update record item
    // replace the item with the updated/submitted item from the form
    this.recordItems[this.recordItems.indexOf(updateEvent.old)] = updateEvent.new;

    // update the total record
    this.totalRecord -= updateEvent.old.amount;
    this.totalRecord += updateEvent.new.amount;
  }

}
