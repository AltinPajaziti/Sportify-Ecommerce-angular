import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }, 

  { path: 'auth', loadChildren: () => import('../app/modules/auth/auth/auth.module').then(m => m.AuthModule) },
  { path: 'login', redirectTo: 'auth/login', pathMatch: 'full' }, 
  { path: 'register', redirectTo: 'auth/register', pathMatch: 'full' }, 
  // { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
