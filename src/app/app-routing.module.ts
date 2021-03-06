import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
   { path: 'HR', loadChildren: () => import('./Modules/hr/hr.module').then(m => m.HRModule) }, 
   { path: 'Manager', loadChildren: () => import('./Modules/manager/manager.module').then(m => m.ManagerModule) },
   { path: 'Employee', loadChildren: () => import('./Modules/employee/employee.module').then(m => m.EmployeeModule) }, 
   { path: 'Sbu', loadChildren: () => import('./Modules/sbu/sbu.module').then(m => m.SbuModule) }, 
   { path: 'shared', loadChildren: () => import('./Modules/shared/shared.module').then(m => m.SharedModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
