import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from './Post';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts?: any[];

  constructor(http: HttpClient) {
    http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((response) => {
        this.posts = response;
      });
  }
}
