import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http' ;
import{FormsModule} from '@angular/forms';
import { DataService } from './data.service';

import {MatInputModule} from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule} from '@angular/material/icon';
import { MatIconRegistry} from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListService } from './todo-list.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,HttpClientModule, MatIconModule,
  ],
  providers: [DataService,TodoListService,MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
