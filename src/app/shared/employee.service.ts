import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from './model/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: EmployeeModel[]=[];
  
  readonly rootURL = 'http://localhost:54277/api';
  //list : EmployeeModel[]=[];

  constructor(private http: HttpClient) { }

  list()
  {
    return this.http.get(this.rootURL + '/Employee/List').toPromise();
  }

  create(formData:any) {
    return this.http.post(this.rootURL + '/Employee/Create', formData);
  }
/*   update() {
    return this.http.put(this.rootURL + '/Employee/Update/'+ this.formData.EmployeeNo, this.formData);
  } */
  delete(id:any) {
    return this.http.delete(this.rootURL + '/Employee/Delete'+ id);
  }

  refreshList(){
    //this.http.get(this.rootURL + '/PaymentDetail')
    //.toPromise()
    //.then(res => this.list = res as EmployeeModel[]);
  }

}
