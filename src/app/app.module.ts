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
import { ModifyGameListComponent } from './game-reviews-list/modify-game-list/modify-game-list.component';

import { UserService } from './_services/user.service';
import { ImagekitIoService } from './_services/imagekit-io.service';
import { CommentService } from './_services/comment.service';
import { AuthService } from './_services/auth.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GameCommentComponent } from './game-review/game-comment/game-comment.component';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { ReactiveFormsModule } from '@angular/forms';
import { ImagekitioAngularModule } from 'imagekitio-angular';

import { PUBLICIMAGEKITKEY } from '../environments/environment';
import { IMAGEKIT_URL_ENDPOINT } from '../environments/environment';
import { AUTHENTICATION_ENDPOINT } from '../environments/environment';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
// import { ModifyGameListComponent } from './game-reviews-list/modify-game-list/modify-game-list.component';
import { AboutComponent } from './about/about/about.component';
import { FooterComponent } from './footer/footer/footer.component';

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
    GameCommentComponent,
    ModifyGameListComponent,
    AboutComponent,
    FooterComponent
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
    ReactiveFormsModule, 
    ImagekitioAngularModule.forRoot({
      publicKey: PUBLICIMAGEKITKEY,
      urlEndpoint: IMAGEKIT_URL_ENDPOINT,
      authenticationEndpoint: AUTHENTICATION_ENDPOINT
    })
  ],
  providers: [
    GamesService,
    AuthService,
    UserService,
    ImagekitIoService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
