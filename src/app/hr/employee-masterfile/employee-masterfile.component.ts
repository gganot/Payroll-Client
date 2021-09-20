import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/shared/employee.service';
import { DepartmentService } from 'src/app/shared/department.service';
import { DepartmentModel } from 'src/app/shared/model/Department.model';
import { Router } from '@angular/router';
import { EmployeeModel } from 'src/app/shared/model/Employee.model';


@Component({
  selector: 'app-employee-masterfile',
  templateUrl: './employee-masterfile.component.html',
  styleUrls: ['./employee-masterfile.component.css']
})
export class EmployeeMasterfileComponent implements OnInit   {
  departments: DepartmentModel[] = [];
   EmpModel = {
    EmployeeNo: '',
    FirstName: '',
    LastName: '',
    MiddleName: '',
    DepartmentId:0
  } 

  constructor(private service: EmployeeService, private toastr: ToastrService,
    private deptService: DepartmentService, private router: Router) { }

  employeeNo_val = new FormControl('', [Validators.required]);
  lastname_val = new FormControl('', [Validators.required]);
  firstname_val = new FormControl('', [Validators.required]);
  middlename_val = new FormControl('', [Validators.required]);
 

  getErrorMessageEmployeeNo() {
    if (this.employeeNo_val.hasError('required')) {
      return 'Please enter Employee No.';
    }
    return;
  }

  getErrorMessageLastName() {
    if (this.lastname_val.hasError('required')) {
      return 'Please enter Last Name.';
    }
    return;
  }
  getErrorMessageFirstName() {
    if (this.firstname_val.hasError('required')) {
      return 'Please enter First Name.';
    }
    return;
  }

  getErrorMessageMiddleName() {

    if (this.middlename_val.hasError('required')) {
      return 'Please enter Middle Name.';
    }
    return;
  }


  ngOnInit(): void {
    this.bindDepartment();
  }
  bindDepartment() {
    this.deptService.list().then(res => this.departments = res as DepartmentModel[]);
  }

  public executeSelectedChange = (event: any) => {
    console.log(event);
  }
  onSubmit(form: NgForm) {
    this.save(form);
  }

  save(form: NgForm) {
    alert(form.value.DepartmentId);
     this.service.create(form.value).subscribe(res => {
        this.toastr.success('Submitted successfully', 'Save');
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Error in Saving Employee', 'Error');
        else
          console.log(err);
      }
    )
  }

  reset(form?: NgForm) {
    if (form != null)
      form.form.reset();
  /*   this.service.formData = {
      employeeNo:'',
      FirstName: '',
      LastName: '',
      MiddleName: ''
    } */

    
  }

}

