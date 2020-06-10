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
        alert("Barcode data " + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;
      })
      .catch(err => {
        console.log("Error", err);
      });
    console.log(this.scannedData);
    console.log(this.idSenha);
    let resposta = this.service.validarSenha(this.idSenha);
    if(resposta.id == this.scannedData.id && resposta.codigo == this.scannedData.codigo)
      document.getElementById("resultado").style.backgroundColor = "green";
    else 
      document.getElementById("resultado").style.backgroundColor = "red";
  }

}
