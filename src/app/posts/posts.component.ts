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

  deletePost(post: any) {
    this.service.deletePost(post).subscribe(() => {
      let index = this.posts?.indexOf(post);
      this.posts?.splice(index, 1);
    });
  }
}
