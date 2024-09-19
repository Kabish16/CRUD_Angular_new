import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {
 editUserForm:FormGroup;
 userId!:number;

constructor(
  private formBuilder: FormBuilder,
  private userService: UserService,
  private route: ActivatedRoute,
  private router: Router,

){
  this.editUserForm=this.formBuilder.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]]
  });
}

ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('id')!; 
    this.userService.getUserById(this.userId).subscribe((response) =>{  
      this.editUserForm.setValue({  
        name: response.data.name,
        email: response.data.email
      });
    });
}
 onSubmit(){
  if (this.editUserForm.valid){
    this.userService.updateUser(this.userId, this.editUserForm.value).subscribe(response => {
    if (response.success){
      this.router.navigate(['/user-list']);
    }
    });
  }
 }
}
