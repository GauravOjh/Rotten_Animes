import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private route:Router) { }

  login(user: string,pass: string){
    if(user==='gaurav' && pass==='123'){
      return 200;
    }
    else{
      return 403;
    }
  }

  logout(){
    
    this.route.navigate(['login']);
  }
}
