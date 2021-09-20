import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './layout/home/home.component';
import { AppRoutingModule } from './routing/routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { LoginComponent } from './user/login/login.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './shared/user.service';
import { EmployeeService } from './shared/employee.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { EmployeeMasterfileComponent } from './hr/employee-masterfile/employee-masterfile.component';
import {MatMenuModule} from '@angular/material/menu';
import { DepartmentService } from './shared/department.service';
import { OrganizationComponent } from './hr/employee/control/organization/organization.component';
import { EmployeeListComponent } from './hr/employee/control/employee-list/employee-list.component';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    LoginComponent,
    UserComponent,
    RegistrationComponent,
    AdminPanelComponent,
    ForbiddenComponent,
    EmployeeMasterfileComponent,
    OrganizationComponent,
    EmployeeListComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },EmployeeService,DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }