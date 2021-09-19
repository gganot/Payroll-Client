import { Component, OnInit } from '@angular/core';
import { NgForm,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/shared/employee.service';
import {DepartmentService } from 'src/app/shared/department.service';
import { DepartmentModel } from 'src/app/shared/model/Department.model';
import { Router } from '@angular/router';
import { EmployeeModel } from 'src/app/shared/model/Employee.model';


@Component({
  selector: 'app-employee-masterfile',
  templateUrl: './employee-masterfile.component.html',
  styleUrls: ['./employee-masterfile.component.css']
})
export class EmployeeMasterfileComponent implements OnInit {
   EmpModel = {
    EmployeeNo: '',
    FirstName: '',
    LastName: '',
    MiddleName: '',
    DepartmentId:'null'
  } 

  departments:DepartmentModel[]=[];

  constructor(private service: EmployeeService, private toastr: ToastrService,
    private deptService:DepartmentService, private router: Router) { }

  ngOnInit(): void {
    this.bindDepartment();
  }
  bindDepartment(){
    this.deptService.list().then(res => this.departments = res as DepartmentModel[]);
  }

  public executeSelectedChange = (event: any) => {
    console.log(event);
  }
  onSubmit(form: NgForm) {
    this.save(form);
  }

  save(form: NgForm) {
    this.service.create(form.value).subscribe(
      res => {
        debugger;
       // this.reset(form);
        this.toastr.success('Submitted successfully', 'Payment Detail Register');
        //this.service.refreshList();
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Employee Save','Error in Saving Employee');
        else
          console.log(err);
      }
    )
  }

  reset(form?: NgForm) {
    if (form != null)
      form.form.reset();
     this.service.formData = {
      EmployeeNo: 0,
      FirstName: '',
      LastName: '',
      MiddleName: ''
    } 
  }

}
