import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecordItem } from 'src/shared/models/record-item.model';
import { MatDialog } from '@angular/material/dialog';
import { EditRecordModalComponent } from '../edit-record-modal/edit-record-modal.component';

@Component({
  selector: 'app-record-item-list',
  templateUrl: './record-item-list.component.html',
  styleUrls: ['./record-item-list.component.scss']
})
export class RecordItemListComponent implements OnInit {

  @Input() budgetItems: RecordItem[];
  @Output() delete: EventEmitter<RecordItem> = new EventEmitter<RecordItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onDeleteButtonClicked(item: RecordItem) {
    this.delete.emit(item);
  }

  onCardClicked(item: RecordItem) {
    // show the edit modal
    const dialogRef = this.dialog.open(EditRecordModalComponent, {
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      // check if result has a value
      if (result) {
        this.update.emit({
          old: item,
          new: result
        });
      }
    })
  }

}

export interface UpdateEvent {
  old: RecordItem;
  new: RecordItem;
}
