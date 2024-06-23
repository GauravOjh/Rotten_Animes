import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FeatureModule } from '../feature/feature.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-animes',
  standalone: true,
  imports: [HeaderComponent,FeatureModule,CommonModule,HttpClientModule],
  templateUrl: './animes.component.html',
  styleUrl: './animes.component.css'
})
export class AnimesComponent implements OnInit {
  type = '';
  id = '';
  url = '';
  movies: any;
  movie: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/data/trending-animes.json';
    }
    if (this.type === 'theatre') {
      this.url = 'http://localhost:4200/assets/data/theatres-animes.json';
    }
    if (this.type === 'popular') {
      this.url = 'http://localhost:4200/assets/data/popular-animes.json';
    }
    this.getMovie();
  }

  getMovie(){
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex(
        (movie: { id: string }) => movie.id == this.id
      );
      if (index > -1) {
        this.movie = this.movies[index];
      }
    });
  }

}
