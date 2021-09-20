import { Component, OnInit,ViewChild, AfterViewInit  } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { EmployeeModel } from 'src/app/shared/model/Employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit,AfterViewInit  {
constructor(private service:EmployeeService) {

 }
 public employees = new MatTableDataSource<EmployeeModel>();
 public pageSize = 1;
 public currentPage = 0;
 public totalSize = 0;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  public tasks: EmployeeModel[] = [];


  ngOnInit(): void {
    this.bindEmployees();
    this.employees.paginator = this.paginator;
  }

  public bindEmployees = () => {
    this.service.list().then(res => this.employees = res as MatTableDataSource<EmployeeModel>);
  }

  ngAfterViewInit(): void {
    //this.employees.sort = this.sort;
    this.employees.paginator = this.paginator;
  }

  public customSort = (event: any) => {
    alert('sort');
    console.log(event);
  }

 
  public doFilter = (value: string) => {
    alert('filter');
    this.employees.filter = value.trim().toLocaleLowerCase();
  }
 
  public redirectToDetails = (id: string) => {
    alert('details');
  }
 
  public redirectToUpdate = (id: string) => {
    alert('update');
  }
 
  public redirectToDelete = (id: string) => {
    alert('delete');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.employees.filter = filterValue.trim().toLowerCase();

    if (this.employees.paginator) {
      this.employees.paginator.firstPage();
    }
  }
  public displayedColumns = ['employeeNo', 'firstName', 'lastName','middleName', 'details', 'update', 'delete'];

  //this.dataSource = new MatTableDataSource<EmployeeModel>();

  handlePage(event:any) {
    alert('pageination');
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.iterator();
  }

   private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.tasks.slice(start, end);
    //this.employees. = part;
  } 
}
