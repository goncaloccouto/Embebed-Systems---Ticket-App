import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IonicRestService {

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  response;
  response2;

  constructor(private http: HttpClient) { }

  getSenha(): Observable<any> {
    this.response = this.http.get('http://localhost:8080/pedirsenha');
    return this.response;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getValuesSenha(){
    console.log(this.response);
    this.response.subscribe(
      (response)=>{
        this.response2 = response;
        console.log(this.response2);
      },
      (error)=>{
        console.log(error.status);
        console.error("erro!");
      }
    );
    return this.response2;
  }
}
