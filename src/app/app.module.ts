import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MediaFeatureComponent } from './media-feature/media-feature.component';
import { GameReviewComponent } from './game-review/game-review.component';
import { PlayVideoDirective } from './custom-directives/play-video.directive';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { GamesService } from './_services/games.service';
import { GameReviewsListComponent } from './game-reviews-list/game-reviews-list.component';
import { GameReviewsListItemComponent } from './game-reviews-list/game-reviews-list-item/game-reviews-list-item.component';
import { ExpandOptionsDirective } from './custom-directives/expand-options.directive';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    MediaFeatureComponent,
    GameReviewComponent,
    PlayVideoDirective,
    RegisterComponent,
    GameReviewsListComponent,
    GameReviewsListItemComponent,
    ExpandOptionsDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
