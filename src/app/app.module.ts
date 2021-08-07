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

import { UserService } from './_services/user.service';

import { AuthService } from './_services/auth.service';
// Before you can use HttpClient, you need to import the Angular 
//HttpClientModule in the appmodule then inject in component where it will be used 
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ModifyGameListComponent } from './game-reviews-list/modify-game-list/modify-game-list.component';
import { AboutComponent } from './about/about/about.component';

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
    ModifyGameListComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [HttpClientModule],
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryGameService,{delay:0, passThruUnknownUrl: true}), //configuartion options for angular in memory web api module
    NoopAnimationsModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [
    GamesService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
