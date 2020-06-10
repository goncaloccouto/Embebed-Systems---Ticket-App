import { Injectable, EventEmitter } from '@angular/core';
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
  senha;
  

  constructor(private http: HttpClient) { }

  getSenha(): Observable<any> {
    this.response = this.http.get('http://192.168.1.143:8080/pedirsenha').subscribe(
      (response)=>{
        this.response2 = response;
        console.log(this.response2);
      },
      (error)=>{
        console.log(error.status);
        console.error("erro!");
      }
    );
    return this.response;
  }

  getValuesSenha(){
    let idSenha = this.response2.id;
    let resposta = this.http.get('http://192.168.1.143:8080/senhas/' + idSenha).subscribe(
      (response)=>{
        console.log(response);
        this.senha = response;
      },
      (error)=>{
        console.error("erro!");
      }
    );
    console.log(this.senha);
    return this.senha;
  }

}
