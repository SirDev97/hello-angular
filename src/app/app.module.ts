import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewerCourseFormComponent } from './newer-course-form/newer-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';

import { RouterModule } from '@angular/router';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './github-followers.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    NewerCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers/:id/:username', component: GithubProfileComponent },
      { path: 'followers', component: GithubFollowersComponent },
      { path: 'posts', component: PostsComponent },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
