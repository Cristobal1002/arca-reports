import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HomeComponent } from './home/home.component';
import {PagesRouterModule} from "./router/pages-router.module";
import { WelcomeComponent } from './welcome/welcome.component';
import { AttendanceComponent } from './attendance/attendance.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



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
  ]
})
export class PagesModule { }
