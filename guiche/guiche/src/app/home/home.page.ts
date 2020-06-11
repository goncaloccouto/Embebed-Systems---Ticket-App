import { Component } from '@angular/core';
import { GuicheService } from '../guiche.service';
import { BarcodeScannerOptions, BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  senhaAtual: String = "";

  encodeData: any;
  scannedData;
  barcodeScannerOptions: BarcodeScannerOptions;
  idSenha: number;
  codigoSenha: number;
  idSenhaRecebida: number;
  codigoSenhaRecebida: number;

  constructor(private service: GuicheService, private barcodeScanner: BarcodeScanner) {
    this.senhaAtual = "0";
  }

  avancarSenha(){
    //console.log(this.service.avancarSenha());
    this.senhaAtual = "" + this.service.avancarSenha();
  }

  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        //localStorage.setItem('senha', JSON.stringify(barcodeData));
        this.scannedData = JSON.stringify(barcodeData);
        this.parseResult(this.scannedData);
        //alert("leu " + barcodeData);
        //alert("scannedData " + this.scannedData);
        //alert("idSenha " + this.idSenha);
        //alert("codigoSenha " + this.codigoSenha);
        let resposta = this.service.validarSenha(this.idSenha);
        //alert("resposta homePage " + resposta);
        // {"id":86,"codigo":472553,"senhaAtual":}
        this.parseNewSenha(resposta);
        //alert("this.idSenhaRecebida " + this.idSenhaRecebida);
        //alert("this.codigoSenhaRecebida " + this.codigoSenhaRecebida);
        if(this.idSenha == this.idSenhaRecebida && this.codigoSenha == this.codigoSenhaRecebida)
          document.getElementById("resultado").style.backgroundColor = "green";
        else 
          document.getElementById("resultado").style.backgroundColor = "red";
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  parseResult(result: String) {
    result = result.substring(17);
    this.idSenha = 0;
    this.idSenha += parseInt(result.charAt(0),10)*100;
    this.idSenha += parseInt(result.charAt(1),10)*10;
    this.idSenha += parseInt(result.charAt(2),10);
    //alert("idSenha " + this.idSenha);
    result = result.substring(15);
    this.codigoSenha = 0;
    this.codigoSenha += parseInt(result.charAt(0))*100000;
    this.codigoSenha += parseInt(result.charAt(1))*10000;
    this.codigoSenha += parseInt(result.charAt(2))*1000;
    this.codigoSenha += parseInt(result.charAt(3))*100;
    this.codigoSenha += parseInt(result.charAt(4))*10;
    this.codigoSenha += parseInt(result.charAt(5));
    }

  reverseString(word: String) {
    return word.split("").reverse().join("");
  }

  parseNewSenha(word: String){
    //alert("string new senha " + word);
    word = word.substring(6);
    this.idSenhaRecebida = 0;
    this.idSenhaRecebida += parseInt(word.charAt(0),10)*100;
    this.idSenhaRecebida += parseInt(word.charAt(1),10)*10;
    this.idSenhaRecebida += parseInt(word.charAt(2),10);
    word = word.substring(13);
    this.codigoSenhaRecebida = 0;
    this.codigoSenhaRecebida += parseInt(word.charAt(0))*100000;
    this.codigoSenhaRecebida += parseInt(word.charAt(1))*10000;
    this.codigoSenhaRecebida += parseInt(word.charAt(2))*1000;
    this.codigoSenhaRecebida += parseInt(word.charAt(3))*100;
    this.codigoSenhaRecebida += parseInt(word.charAt(4))*10;
    this.codigoSenhaRecebida += parseInt(word.charAt(5));
  }

}
