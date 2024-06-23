import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicesService } from '../services/auth-services.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
constructor(private route : Router,private auth:AuthServicesService){}
goToHome(){
  this.route.navigate(['home']);
}
  logout(){
    this.auth.logout();
  }
}
