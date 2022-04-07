import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../posts/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post>(this.url);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.url, JSON.stringify(post));
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(
      this.url + '/' + post.id,
      JSON.stringify({ isRed: true })
    );
  }

  deletePost(id: number): Observable<unknown> {
    return this.http.delete(this.url + '/' + id);
  }
}
