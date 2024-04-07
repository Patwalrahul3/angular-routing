import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { CategoriesComponent } from './categories/categories.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/Guards/auth-guard-service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeactivateGuardService } from './services/Guards/deactivate-guard-service';
import { UserResolverService } from './services/resolvers/user-resolver-services';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';

const routes : Routes = [
  {path: '' , component: HomeComponent},
  {path: 'users' , component: UsersComponent , 
  // canActivate: [AuthGuardService],
  canActivateChild: [AuthGuardService],

   children:[
    {path: ':id/:name' , component: UserComponent},
    {path: ':id/:name/:edit' , component: EditUserComponent, 
    resolve: {user: UserResolverService},
    canDeactivate: [DeactivateGuardService]},

   ],
  },
 
  {path: 'categories' , component: CategoriesComponent},
  {path: 'templateform' , component: TemplateFormComponent},
  {path: 'reactive' , component: ReactiveComponent},
  {path: 'filterpipe' , component: FilterpipeComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'page-not-found'}
]

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 // imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
