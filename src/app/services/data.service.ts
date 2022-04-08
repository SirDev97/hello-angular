import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(@Inject(String) private url: string, private http: HttpClient) {}

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

  getAll() {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  create(resource: any): Observable<any> {
    return this.http
      .post(this.url, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }

  update(resource: any): Observable<any> {
    return this.http
      .put(this.url + '/' + resource.id, JSON.stringify({ isRed: true }))
      .pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<unknown> {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }
}
