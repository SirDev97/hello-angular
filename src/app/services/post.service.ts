import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Post } from '../posts/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'https://asdjsonplaceholder.typicode.com/posts';

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(error.message));
  }

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post>(this.url).pipe(catchError(this.handleError));
  }

  createPost(post: Post): Observable<Post> {
    return this.http
      .post<Post>(this.url, JSON.stringify(post))
      .pipe(catchError(this.handleError));
  }

  updatePost(post: Post): Observable<Post> {
    return this.http
      .put<Post>(this.url + '/' + post.id, JSON.stringify({ isRed: true }))
      .pipe(catchError(this.handleError));
  }

  deletePost(id: number): Observable<unknown> {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }
}
