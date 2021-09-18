import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-masterfile',
  templateUrl: './employee-masterfile.component.html',
  styleUrls: ['./employee-masterfile.component.css']
})
export class EmployeeMasterfileComponent implements OnInit {
  EmpModel = {
    EmployeeId: '',
    SecondaryId: '',
    FirstName: '',
    LastName: '',
    MiddleName: '',
    Main:'',
    Branch:''
  }
  constructor() { }

  ngOnInit(): void {
  }
  public executeSelectedChange = (event: any) => {
    //console.log(event);
  } 
  onSubmit(form: NgForm) {
    alert(form.value.LastName);
  }

}
