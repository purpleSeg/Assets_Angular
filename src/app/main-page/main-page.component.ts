import { Component, OnInit } from '@angular/core';
import { RecordItem } from 'src/shared/models/record-item.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';
import { Observable, throwError } from 'rxjs';
import { UpdateEvent } from '../record-item-list/record-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  recordItems: RecordItem[] = new Array<RecordItem>();
  totalRecord: number = 0;
  endpoint = "http://localhost:8080/";

  constructor(private http: HttpClient) {  }

  ngOnInit() {
    this.loadValues();
  }

  async loadValues() {
    const delay = async (ms: number) => new Promise(res => setTimeout(res, ms));
    this.getProducts().subscribe(recordItems => this.recordItems = recordItems);
    await delay(200);
    this.getNetWorth().subscribe(totalRecord => this.totalRecord = totalRecord);
    await delay(200);
  }

  getProducts(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('user:password'),
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get<RecordItem[]>(this.endpoint + "records/", httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getNetWorth(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('user:password'),
        'Access-Control-Allow-Origin': '*'
      })
    };
    const response = this.http.get<number>(this.endpoint + "netWorth/", httpOptions).pipe(
      catchError(this.handleError)
    );
    return response;
    
  }

  addItem(newItem: RecordItem) {
    this.recordItems.push(newItem);
    this.totalRecord += newItem.amount;
    if (newItem.amount >= 0) {
      newItem.type = "Asset";
    } else {
      newItem.type = "Liability"
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('user:password'),
        'Access-Control-Allow-Origin': '*'
      })
    };
    const response = this.http.post<RecordItem>(this.endpoint + "postRecord/", newItem, httpOptions).pipe(
      catchError(this.handleError)
    );
    response.subscribe();
    return response;
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

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('user:password'),
        'Access-Control-Allow-Origin': '*'
      })
    };
    const response = this.http.put<RecordItem>(this.endpoint + "deleteRecord/?description=" + updateEvent.old.description + "/", updateEvent.new, httpOptions).pipe(
      catchError(this.handleError)
    );
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
