import { Injectable } from '@angular/core';
import { Observable, throwError, ObservableInput } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUri:string = 'http://localhost:3000/api';
  errorMgmt: (err: any, caught: Observable<Object>) => ObservableInput<any>;

  constructor(private http: HttpClient) { }

  createEmployee(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(err => {
          console.log('Handling error locally and rethrowing it...', err);
          return throwError(err);
})
      )
  }

  // Get all employees
  getEmployees() {
    return this.http.get(`${this.baseUri}`);
  }
}
