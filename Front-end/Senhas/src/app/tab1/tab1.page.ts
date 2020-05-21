import { Component } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IonicRestService } from '../ionic-rest.service'
import { Router } from  "@angular/router";



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {


  constructor(private service: IonicRestService, private router: Router) {}

  novaSenha(){

    this.service.getSenha().subscribe(
      (response)=>{
        //response.json();
        console.log(response);
        
      },
      (error)=>{
        console.log(error.status);
        console.error("erro!");
      }
    );

    this.router.navigate(['tabs/tab2']);

  }

}
