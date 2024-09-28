import { Component, OnInit } from '@angular/core';

import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {User} from "../../DTO/user";
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: User[]=[];

  public editUser: User | undefined;

  public deleteUser: User|undefined;

  public deleteUserId:number=0;


  constructor(private userService:UserService) {
  }


  ngOnInit() {
    this.getUsers();
  }

  public getUsers():void{
    this.userService.getUsers().subscribe(
      (response:User[])=>{
        this.users=response;
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }






  public onAddUser(addForm: NgForm): void {
    // @ts-ignore
    document.getElementById('add-user-form').click();
    this.userService.addUser(addForm.value).subscribe(
      (response: User) => {
        console.log(response);
        this.getUsers();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateUser(user: User): void {
    this.userService.updateUser(user).subscribe(
      (response: User) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      (response: void) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchUsers(key: string): void {
    console.log(key);
    const results: User[] = [];
    for (const employee of this.users) {
      if (employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.users = results;
    if (results.length === 0 || !key) {
      this.getUsers();
    }
  }






  public onOpenModal(user: User|null,mode:string):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode==='add'){
      button.setAttribute('data-target','#addUserModal')
    }

    // @ts-ignore
    container.appendChild(button);
    button.click();

  }







  public onOpenModalEdit(user: User,mode:string):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode==='edit'){
      this.editUser=user;
      button.setAttribute('data-target','#updateUserModal')
    }
    if (mode==='delete'){
      this.deleteUser=user;
      this.deleteUserId=user.id;
      button.setAttribute('data-target','#deleteUserModal')
    }

    // @ts-ignore
    container.appendChild(button);
    button.click();

  }





}
