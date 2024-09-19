import { Component } from '@angular/core';
import { FormBuilder , FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule ,  } from '@angular/common';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
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
    email:['',[Validators.required,Validators.email]]
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
