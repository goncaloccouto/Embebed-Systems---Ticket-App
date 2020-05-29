import { Component } from '@angular/core';
import { GuicheService } from '../guiche.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private service: GuicheService) {}

  avancarSenha(){
    this.service.avancarSenha();
  }

}
