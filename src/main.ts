import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { UserTableComponent } from './app/user-table/user-table.component';
import { AddUserComponent } from './app/add-user/add-user.component';
import { EditUserComponent } from './app/edit-user/edit-user.component';
import { provideRouter, Routes } from '@angular/router';


const routes:Routes =[
  {path:'user-list',component:UserTableComponent},
  {path:'add', component: AddUserComponent},
  {path:'edit/:id', component: EditUserComponent},
  {path:'',redirectTo:'/user-list', pathMatch:'full'},
  {path:'**', redirectTo:'/user-list'}

]


bootstrapApplication(AppComponent,{
  providers:[
    provideHttpClient(),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
