import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './layout/private/principal/principal.component';
import { LoginComponent } from './layout/public/login/login/login.component';
import { RegisterComponent } from './layout/public/register/register/register.component';

const routes: Routes = [
  {
    path : 'inicio',
    component: LoginComponent,
    // pathMatch: 'full'
  },
  {
    path : '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path : 'register',
    component : RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
