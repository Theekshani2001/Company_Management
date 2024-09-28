import { Component, OnInit } from '@angular/core';
import {Employee} from "../../DTO/employee";
import {EmployeeService} from "../../Services/employee.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees: Employee[]=[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees():void{
    this.employeeService.getEmployees().subscribe(
      (response:Employee[])=>{
        this.employees=response;
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
