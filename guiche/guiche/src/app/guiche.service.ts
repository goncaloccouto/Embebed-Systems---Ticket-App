import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuicheService {

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  senhaRecebida = "";
  atual = "";

  constructor(private http: HttpClient) { }

  avancarSenha() {
    this.http.get('http://192.168.1.143:8080/avancarsenha').subscribe(
      (response)=>{
        //console.log("response " + response);
        //console.log(Number(response).toString());
        localStorage.setItem('atual',Number(response).toString());
        //response.json();
        //console.log("boas");
      },
      (error)=>{
        //console.log(error.status);
        console.error("erro!");
      }
    );
    //console.log(localStorage.getItem('atual'));
    this.atual = localStorage.getItem('atual');
    localStorage.removeItem('atual');
    //console.log("atual " + this.atual);
    return this.atual;
  }

  validarSenha(idSenha){
    //alert("idSenha validarSenha " + idSenha);
    let resposta = this.http.get('http://192.168.1.143:8080/senhas/' + idSenha).subscribe(
      (response)=>{
        //alert("response val " + response);
        localStorage.setItem('objeto',JSON.stringify(response));
      },
      (error)=>{
        console.error("erro!");
      }
    );
    this.senhaRecebida = localStorage.getItem('objeto');
    //alert("this.senhaRecebida " + this.senhaRecebida);
    localStorage.removeItem('objeto');
    return this.senhaRecebida;
  }
}
