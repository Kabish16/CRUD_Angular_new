import { Component , OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [RouterModule , CommonModule,InputTextModule,ButtonModule,TableModule],
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})

export class UserTableComponent implements OnInit {
  users: any[] = [];
  tableVisible: boolean= true;

  constructor( private userService: UserService){}

  ngOnInit(): void {
      this.loadUsers();
  }

  loadUsers():void{
    this.userService.getUser().subscribe(data => {
      this.users = data.data.users;
      this.tableVisible = true;
    });
  }

  deleteUser(id: number):void{
    this.userService.deleteUser(id).subscribe(() =>{
      this.loadUsers();
    })
  }
}
