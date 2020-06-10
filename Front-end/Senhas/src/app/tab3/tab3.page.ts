import { Component } from '@angular/core';
import { IonicRestService } from '../ionic-rest.service';
import { BarcodeScannerOptions, BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;


  constructor(private barcodeScanner: BarcodeScanner, private service: IonicRestService) {
  }

  encodedText() {
    let senha = this.service.getValuesSenha();
    this.encodeData = senha;
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
      .then(
        encodedData => {
          console.log(encodedData);
          this.encodeData = encodedData;
        },
        err => {
          console.log("Error occured : " + err);
        }
      );
  }

}
