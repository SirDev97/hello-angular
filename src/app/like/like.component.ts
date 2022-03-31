import { Component, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {
  heartIcon = faHeart;
  @Input('likesCount') likesCount!: number;
  @Input('isActive') isActive!: boolean;

  onClick() {
    this.likesCount += this.isActive ? -1 : 1;
    this.isActive = !this.isActive;
  }
}
