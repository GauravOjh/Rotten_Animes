import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor() { }

  login(user: string,pass: string){
    if(user==='gaurav' && pass==='123'){
      return 200;
    }
    else{
      return 403;
    }
  }
}
