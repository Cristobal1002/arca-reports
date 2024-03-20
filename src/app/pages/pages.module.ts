import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HomeComponent } from './home/home.component';
import {PagesRouterModule} from "./router/pages-router.module";
import { WelcomeComponent } from './welcome/welcome.component';
import { AttendanceComponent } from './attendance/attendance.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
    AttendanceComponent
  ],
  imports: [
    CommonModule,
    PagesRouterModule,
    NgOptimizedImage,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ]
})
export class PagesModule { }
