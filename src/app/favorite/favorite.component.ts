import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input('isFavorite') isSelected = false;
  @Output() change = new EventEmitter();
  // isFavorite = false;

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit();
  }
  ngOnInit(): void {}
}
