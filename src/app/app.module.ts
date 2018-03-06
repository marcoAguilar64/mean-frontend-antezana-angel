import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { UserFormEditComponent } from './user-form-edit/user-form-edit.component';
import { UserFormCreateComponent } from './user-form-create/user-form-create.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    UserFormEditComponent,
    UserFormCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
