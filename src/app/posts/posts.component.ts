import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from './Post';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any = [];

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((posts) => (this.posts = posts));
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    this.posts?.splice(0, 0, post);

    input.value = '';

    this.service.create(post).subscribe({
      next: (newPost) => {
        post.id = newPost.id;
      },

      error: () => this.posts?.splice(0, 1),
    });
  }

  updatePost(post: any) {
    this.service.update(post).subscribe((updatedPost) => {
      console.log(updatedPost);
    });
  }

  deletePost(post: Post) {
    let index = this.posts?.indexOf(post);
    this.posts?.splice(index, 1);

    this.service.delete(post.id).subscribe({
      next: () => null,

      error: (err: HttpErrorResponse) => {
        this.posts?.splice(index, 0, post);

        if (err.status === 404) alert('This post has already been deleted.');
        else throw err;
      },
    });
  }
}
