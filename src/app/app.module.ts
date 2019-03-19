import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
