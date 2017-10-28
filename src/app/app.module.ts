import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AddEditTodoComponent } from './add-edit-todo/add-edit-todo.component';
import { CommonserviceService } from './commonservice.service';
import { AppRountingModule } from "./app.routing.module";
import { rountingComponent } from "./app.routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    rountingComponent,
    AddEditTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRountingModule
  ],
  providers: [CommonserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
