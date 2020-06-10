import { Component } from '@angular/core';
import { GuicheService } from '../guiche.service';
import { BarcodeScannerOptions, BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  encodeData: any;
  scannedData;
  barcodeScannerOptions: BarcodeScannerOptions;
  idSenha;

  constructor(private service: GuicheService, private barcodeScanner: BarcodeScanner) {}

  avancarSenha(){
    this.service.avancarSenha();
  }

  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        localStorage.setItem('senha', JSON.stringify(barcodeData));
        this.scannedData = localStorage.getItem('senha');
        this.idSenha = this.scannedData.id;
        let resposta = this.service.validarSenha(this.idSenha);
        alert(resposta);
        if(resposta.id.equals(this.scannedData.id) && resposta.codigo.equals(this.scannedData.codigo))
          document.getElementById("resultado").style.backgroundColor = "green";
        else 
          document.getElementById("resultado").style.backgroundColor = "red";
      })
      .catch(err => {
        console.log("Error", err);
      });
    /*this.scannedData = localStorage.getItem('senha');
    this.idSenha = this.scannedData.id;
    alert(this.scannedData);
    alert(this.idSenha);
    let resposta = this.service.validarSenha(this.idSenha);
    alert(resposta);
    if(resposta.id.equals(this.scannedData.id) && resposta.codigo.equals(this.scannedData.codigo))
      document.getElementById("resultado").style.backgroundColor = "green";
    else 
      document.getElementById("resultado").style.backgroundColor = "red";*/
  }

}
