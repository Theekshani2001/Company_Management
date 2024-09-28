import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from "./Components/employee/employee.component";
import {UserComponent} from "./Components/user/user.component";

const routes: Routes = [
  {path:'',redirectTo:'/employee',pathMatch:'full'},
  {path:'employee',component:EmployeeComponent},
  {path:'user',component:UserComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
