import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component'; // Best practice

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true,
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed: ', eventArgs);
  }

  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true,
  };
}
