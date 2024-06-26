import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/Guards/auth-guard-service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeactivateGuardService } from './services/Guards/deactivate-guard-service';
import { FormsModule } from '@angular/forms';
import { UserResolverService } from './services/resolvers/user-resolver-services';
import { userService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    UserComponent,
    UsersComponent,
    PageNotFoundComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuardService, DeactivateGuardService, UserResolverService, userService],
  bootstrap: [AppComponent]
})
export class AppModule { }
