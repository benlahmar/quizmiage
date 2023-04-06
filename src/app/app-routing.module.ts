import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Quiz1Component } from './quiz1/quiz1.component';
import { ThemeComponent } from './theme/theme.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"users",component:UserComponent},
  {path:"login", component:LoginComponent},
  {path:"theme", component:ThemeComponent},
  {path:"quiz/:id",component:Quiz1Component},
  {path:'', redirectTo:'/theme', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
