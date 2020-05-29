import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuicheService {

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  avancarSenha() {
    this.http.get('http://localhost:8080/avancarsenha').subscribe(
      (response)=>{
        //response.json();
        console.log("boas");
      },
      (error)=>{
        console.log(error.status);
        console.error("erro!");
      }
    );
  }
}
