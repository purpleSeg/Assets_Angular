import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecordItem } from 'src/shared/models/record-item.model';
import { MatDialog } from '@angular/material/dialog';
import { EditRecordModalComponent } from '../edit-record-modal/edit-record-modal.component';
import { catchError } from 'rxjs/internal/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-record-item-list',
  templateUrl: './record-item-list.component.html',
  styleUrls: ['./record-item-list.component.scss']
})
export class RecordItemListComponent implements OnInit {

  @Input() recordItems: RecordItem[];
  @Output() delete: EventEmitter<RecordItem> = new EventEmitter<RecordItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  endpoint = "http://localhost:8080/";

  constructor(public dialog: MatDialog, private http: HttpClient) { }

  totalAssets;
  totalLiabilities;

  async ngOnInit() {
    const delay = async (ms: number) => new Promise(res => setTimeout(res, ms));
    await delay(200);
    this.getTotalAssets().subscribe(totalAssets => this.totalAssets = totalAssets);
    await delay(200);
    this.getTotalLiabilities().subscribe(totalLiabilities => this.totalLiabilities = totalLiabilities);
  }

  getTotalAssets(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('user:password'),
        'Access-Control-Allow-Origin': '*'
      })
    };
    const response = this.http.get<number>(this.endpoint + "assetsTotal/", httpOptions).pipe(
      catchError(this.handleError)
    );
    response.subscribe();
    return response;
    
  }

  getTotalLiabilities(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('user:password'),
        'Access-Control-Allow-Origin': '*'
      })
    };
    const response = this.http.get<number>(this.endpoint + "liabilitiesTotal/", httpOptions).pipe(
      catchError(this.handleError)
    );
    response.subscribe();
    return response;
    
  }

  async onDeleteButtonClicked(item: RecordItem) {
    this.delete.emit(item);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('user:password'),
        'Access-Control-Allow-Origin': '*'
      })
    };
    const response = this.http.delete<RecordItem>(this.endpoint + "deleteRecord/" + item.description + "/", httpOptions).pipe(
      catchError(this.handleError)
    );
    response.subscribe();

    const delay = async (ms: number) => new Promise(res => setTimeout(res, ms));
    await delay(200);
    this.getTotalAssets().subscribe(totalAssets => this.totalAssets = totalAssets);
    await delay(200);
    this.getTotalLiabilities().subscribe(totalLiabilities => this.totalLiabilities = totalLiabilities);
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
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

}

export interface UpdateEvent {
  old: RecordItem;
  new: RecordItem;
}
