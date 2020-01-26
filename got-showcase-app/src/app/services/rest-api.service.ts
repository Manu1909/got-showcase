import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { House } from '../models/house';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private apiUrl = 'https://anapioficeandfire.com/api'
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {}

  public getHouses(): Observable<House[]> {
    return this.httpClient.get<House[]>(this.apiUrl + '/houses', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  public getHouseById(id: number): Observable<House> {
    return this.httpClient.get<House>(this.apiUrl + '/houses/' + id)
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
