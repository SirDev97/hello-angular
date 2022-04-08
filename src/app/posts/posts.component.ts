import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
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
    this.service.getPosts().subscribe((res: Post) => (this.posts = res));
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';

    this.service.createPost(post).subscribe((response) => {
      post.id = response.id;
      this.posts?.splice(0, 0, post);
    });
  }

  updatePost(post: any) {
    this.service.updatePost(post).subscribe((res) => {
      console.log(res);
    });
  }

  deletePost(postId: number) {
    this.service.deletePost((postId = 500)).subscribe({
      next: () => {
        let index = this.posts?.indexOf(postId);
        this.posts?.splice(index, 1);
      },

      error: (err: HttpErrorResponse) => {
        if (err.status === 404) alert('This post has already been deleted.');
      },
    });
  }
}
