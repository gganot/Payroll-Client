import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepartmentModel } from './model/Department.model';

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {
  readonly rootURL = 'http://localhost:54277/api';
  departments:DepartmentModel[]=[];
  
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(this.rootURL + '/Department/List').toPromise();
  }


}
