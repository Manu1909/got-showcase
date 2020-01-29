import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { House } from '../models/house';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {}

  public getHouses(): Observable<House[]> {
    return this.http.get<House[]>(API_URL + '/houses')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


  public getHouseById(id: number): Observable<House> {
    return this.http.get<House>(API_URL + '/houses/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  /**
   * Handle error on api call
   * @param error
   */
  private handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
