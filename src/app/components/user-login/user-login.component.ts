import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit  {
  sibnupUsers:any[]=[];
  login:boolean = false;
  signupObj:any={
    userName:'',
    email:'',
    password:''
  };

  loginObj:any={
    userName:'',
    password:''
  };
constructor(private router: Router){}

 ngOnInit(): void {
  const localData =localStorage.getItem('sibnupUsers');
  if(localData !=null){
    this.sibnupUsers=JSON.parse(localData);
  }
 }

 onSignup(){
  this.sibnupUsers.push(this.signupObj);
  localStorage.setItem('sibnupUsers', JSON.stringify(this.sibnupUsers));
  this.signupObj={
    userName:'',
    email:'',
    password:''
  }
 }

 onLogin(){

  const userFound = this.sibnupUsers.find(user=>user.userName == this.loginObj.userName && user.password == this.loginObj.password);
  if(userFound != undefined){
    this.router.navigate(['/home']);

  }else{
    this.login=true;
    // alert('There is an error in your username or password. Please try again');
  }

 }


}
