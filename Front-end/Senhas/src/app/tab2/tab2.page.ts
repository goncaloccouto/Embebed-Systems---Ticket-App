import { Component } from '@angular/core';
import { IonicRestService } from '../ionic-rest.service';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  source = interval(5000);
  subscription: Subscription;
  

  senha;
  idLabel: String = "";
  codigoLabel: String = "";
  atualLabel: String = "";

  constructor(private service: IonicRestService) {
    this.subscription = this.source.subscribe(val => this.show_ticket());
  }

  public show_ticket(){
    let senha = this.service.getValuesSenha();
    console.log(senha);
    this.idLabel = "" + senha.id;
    this.codigoLabel = "" + senha.codigo;
    this.atualLabel = "" + senha.senhaAtual;
  }
  
}
