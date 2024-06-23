import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthServicesService } from '../services/auth-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 username="";
 password="";
 errorMsg="";
 constructor(private auth:AuthServicesService,private route:Router){}
  login(){
    if(this.username.trim().length===0){
      this.errorMsg="Username is Required";
    }
    else if(this.password.trim().length===0){
      this.errorMsg="Password is Required";
    }
    else if (this.username.trim().length===0 && this.password.trim().length===0){
      this.errorMsg="Please fill both details"
    }
    else{
      this.errorMsg="";
      let res=this.auth.login(this.username,this.password);
      if(res===200){
        this.route.navigate(['home']);
      }
      if(res===403){
        this.errorMsg="Invalid Credentials"
      }
    }
  }
}
