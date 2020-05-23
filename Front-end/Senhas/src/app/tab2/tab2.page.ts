import { Component } from '@angular/core';
import { IonicRestService } from '../ionic-rest.service'


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  idLabel: String = "";
  codigoLabel: String = "";
  atualLabel: String = "";

  constructor(private service: IonicRestService) {}

  public show_ticket(){
    let resposta = this.service.getValuesSenha();
    this.idLabel = "" + resposta.id;
    this.codigoLabel = "" + resposta.codigo;
    this.atualLabel = "" + resposta.senhaAtual;
  }
  
}
