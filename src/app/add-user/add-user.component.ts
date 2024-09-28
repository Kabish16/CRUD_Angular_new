import { Component } from '@angular/core';
import { FormBuilder , FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule ,  } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext'; 
import { ButtonModule } from 'primeng/button'; 
import { MessageModule } from 'primeng/message'; 



@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,InputTextModule, ButtonModule, MessageModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent {
addUserForm: FormGroup;

constructor(
  private formBuilder: FormBuilder,
  private userService: UserService,
  private router: Router,
){
  this.addUserForm = this.formBuilder.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  });
}

onSubmit(){
  if(this.addUserForm.valid){
    this.userService.addUser(this.addUserForm.value).subscribe( response =>{
      if (response.success){
        this.router.navigate(['/user-list']);
      }
    })
  }
 }
}
