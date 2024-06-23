import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatureModule } from '../feature/feature.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FeatureModule,FormsModule,CommonModule,HttpClientModule,NgbModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  trendingMovies:any;
  popularMovies:any
  theatreMovies:any
  constructor(private http:HttpClient,private route:Router){}

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies(){
    this.http.get('http://localhost:4200/assets/data/trending-animes.json').subscribe((movies)=>{
      this.trendingMovies=movies;
    });
  }

  getTheatreMovies(){
    this.http.get('http://localhost:4200/assets/data/theatres-animes.json').subscribe((movies)=>{
      this.theatreMovies=movies;
    })
  }

  getPopularMovies(){
    this.http.get('http://localhost:4200/assets/data/popular-animes.json').subscribe((movies)=>{
      this.popularMovies=movies;
    })
  }
  goToMovie(type:string,id:string){
    this.route.navigate(['anime', type, id]);
  }
}

