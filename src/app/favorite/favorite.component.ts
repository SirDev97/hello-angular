import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // inputs: ['isFavorite'],
})
export class FavoriteComponent {
  faStar = faStar;
  faStarHalf = faStarHalf;
  @Input('isFavorite') isSelected = false;
  @Output('change') click = new EventEmitter();
  // isFavorite = false;

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });
  }
}

// Best practice: declare the interface here and export it.
export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
