import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from 'src/app/shared/model/Department.model';
import { DepartmentService } from 'src/app/shared/department.service';
import { NgForm,FormControl,Validators } from '@angular/forms';
import { EmployeeModel } from 'src/app/shared/model/Employee.model';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  EmpModel:EmployeeModel[]=[];

  departments:DepartmentModel[]=[];
 
  constructor(private deptService:DepartmentService) { }

  ngOnInit(): void {
    this.bindDepartment();
  }
  bindDepartment(){
    this.deptService.list().then(res => this.departments = res as DepartmentModel[]);
  }

}
