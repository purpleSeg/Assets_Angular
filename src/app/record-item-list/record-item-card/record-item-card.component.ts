import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecordItem } from 'src/shared/models/record-item.model';

@Component({
  selector: 'app-record-item-card',
  templateUrl: './record-item-card.component.html',
  styleUrls: ['./record-item-card.component.scss']
})
export class RecordItemCardComponent implements OnInit {

  @Input() item: RecordItem;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

  onXButtonClick() {
    // here we want emit an event
    this.xButtonClick.emit();
  }

  onCardClick() {
    this.cardClick.emit();
  }

}
