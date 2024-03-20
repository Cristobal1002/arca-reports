import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from "../welcome/welcome.component";
import {AttendanceComponent} from "../attendance/attendance.component";
import {SummaryComponent} from "../summary/summary.component";

const  routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'attendance', component: AttendanceComponent},
  {path: 'summary', component: SummaryComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRouterModule { }
