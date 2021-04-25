import { Component, OnInit, Inject } from '@angular/core';
import { RecordItem } from 'src/shared/models/record-item.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-record-modal',
  templateUrl: './edit-record-modal.component.html',
  styleUrls: ['./edit-record-modal.component.scss']
})
export class EditRecordModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditRecordModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item: RecordItem) { }

  ngOnInit() {
  }

  onSubmitted(updatedItem: RecordItem) {
    this.dialogRef.close(updatedItem);
  }

}
