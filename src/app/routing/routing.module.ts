import { AdminPanelComponent } from '../admin-panel/admin-panel.component';
import { ForbiddenComponent } from '../forbidden/forbidden.component';
import { AuthGuard } from '../auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { RegistrationComponent } from '../user/registration/registration.component';
import { LoginComponent } from '../user/login/login.component';
import { HomeComponent } from '../layout/home/home.component';
import { EmployeeMasterfileComponent } from '../hr/employee-masterfile/employee-masterfile.component';
import { EmployeeListComponent } from '../hr/employee/control/employee-list/employee-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  },
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'hr/employee-masterfile',component:EmployeeMasterfileComponent,canActivate:[AuthGuard]},
  {path:'forbidden',component:ForbiddenComponent},
  {path:'adminpanel',component:AdminPanelComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},
  {path:'hr/employee/employee-list',component:EmployeeListComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }