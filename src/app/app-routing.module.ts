import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MediaFeatureComponent } from './media-feature/media-feature.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: "login", component: LoginComponent },
  {path:"", component: HomeComponent}, //home-landing-page
  //{path:"game-review", component: GameReviewComponent}, //review
  {path:"media", component: MediaFeatureComponent}, //media-feature-component
  {path:"register", component: RegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
