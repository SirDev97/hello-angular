import { Component, OnInit, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // inputs: ['isFavorite'],
})
export class FavoriteComponent implements OnInit {
  faStar = faStar;
  faStarHalf = faStarHalf;
  @Input() isFavorite = false;
  // isFavorite = false;

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
  ngOnInit(): void {}
}
