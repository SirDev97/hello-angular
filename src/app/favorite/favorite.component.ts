import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  faStar = faStar;
  faStarHalf = faStarHalf;
  isActive = false;

  onClick() {
    this.isActive = !this.isActive;
  }
  ngOnInit(): void {}
}
