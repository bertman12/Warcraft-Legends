import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MediaFeatureComponent } from './media-feature/media-feature.component';
import { RegisterComponent } from './register/register.component';
import { GameReviewComponent } from './game-review/game-review.component';
import { GameReviewsListComponent } from './game-reviews-list/game-reviews-list.component';

const routes: Routes = [
  {path: "login", component: LoginComponent },
  {path:"", component: HomeComponent}, //home-landing-page
  {path:"game-reviews-list", component: GameReviewsListComponent}, //review list
  {path:"game-reviews-list/:id", component: GameReviewComponent}, //review
  {path:"register", component: RegisterComponent},


  {path:"**", redirectTo: '', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
