import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'HR', loadChildren: () => import('./Modules/hr/hr.module').then(m => m.HRModule) }, { path: 'Manager', loadChildren: () => import('./Modules/manager/manager.module').then(m => m.ManagerModule) }, { path: 'Employee', loadChildren: () => import('./Modules/employee/employee.module').then(m => m.EmployeeModule) }, { path: 'Sbu', loadChildren: () => import('./Modules/sbu/sbu.module').then(m => m.SbuModule) }, { path: 'Header', loadChildren: () => import('./Pages/header/header.module').then(m => m.HeaderModule) }, { path: 'Sidebar', loadChildren: () => import('./Pages/sidebar/sidebar.module').then(m => m.SidebarModule) }, { path: 'Footer', loadChildren: () => import('./Pages/footer/footer.module').then(m => m.FooterModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
