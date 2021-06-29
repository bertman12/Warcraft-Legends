import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {path:"/", component: AppComponent}, //home-landing-page  
  // {path:"/login", component: AppComponent}, //login
  // {path:"/review", component: AppComponent}, //review
  // {path:"/", component: AppComponent} //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
