import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [NgbModule,CommonModule],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent implements OnInit {
  @Input() rating: any;
  @Input() isReadOnly: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
