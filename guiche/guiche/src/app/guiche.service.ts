import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuicheService {

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  senhaRecebida;

  constructor(private http: HttpClient) { }

  avancarSenha() {
    this.http.get('http://192.168.1.143:8080/avancarsenha').subscribe(
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

  validarSenha(idSenha){
    let resposta = this.http.get('http://192.168.1.143:8080/senhas/' + idSenha).subscribe(
      (response)=>{
        alert(response);
        this.senhaRecebida = response;
      },
      (error)=>{
        console.error("erro!");
      }
    );
    alert(this.senhaRecebida);
    return this.senhaRecebida;
  }
}
