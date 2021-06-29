import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameReviewComponent } from './game-review/game-review.component';

const routes: Routes = [
  { path: 'game-review', component: GameReviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
