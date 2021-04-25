import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RecordItemListComponent } from './record-item-list/record-item-list.component';
import { AddRecordFormComponent } from './add-record-form/add-record-form.component';
import { EditRecordModalComponent } from './edit-record-modal/edit-record-modal.component';
import { RecordItemCardComponent } from './record-item-list/record-item-card/record-item-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RecordItemListComponent,
    AddRecordFormComponent,
    EditRecordModalComponent,
    RecordItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
