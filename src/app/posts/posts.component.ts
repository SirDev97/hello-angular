import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

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
    input.value = '';

    this.service.create(post).subscribe((newPost) => {
      post.id = newPost.id;
      this.posts?.splice(0, 0, post);
    });
  }

  updatePost(post: any) {
    this.service.update(post).subscribe((updatedPost) => {
      console.log(updatedPost);
    });
  }

  deletePost(postId: number) {
    this.service.delete(postId).subscribe({
      next: () => {
        let index = this.posts?.indexOf(postId);
        this.posts?.splice(index, 1);
      },

      error: (err: HttpErrorResponse) => {
        if (err.status === 404) alert('This post has already been deleted.');
        else throw err;
      },
    });
  }
}
