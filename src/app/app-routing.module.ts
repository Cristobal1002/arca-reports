import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PagesModule} from './pages/pages.module';
import {PagesRouterModule} from "./pages/router/pages-router.module";
const routes: Routes =[
  {path: 'register', loadChildren:() => PagesModule},
  {path:'**', redirectTo: 'register/welcome'}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
