import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserComponent } from './user/user.component';
import {  RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';

const appRoutes : Routes = [
  {path: '' , component: HomeComponent},
  {path: 'users' , component: UsersComponent ,
   children:[{path: ':id/:name' , component: UserComponent}],
  },
 
  {path: 'categories' , component: CategoriesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
