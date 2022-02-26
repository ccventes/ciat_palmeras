import { Component, OnInit } from '@angular/core';
import {environment} from '../environments/environment';
import { ZonaService } from './service/zona.service'
import { Zonas } from './interfaces/zonas';
import { forkJoin, Subscription,interval, timer } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  momento = 0;
  title = 'ciat_palmera_frontend';
  public env: string = environment.location;
  subscription: Subscription 
  zonas: Zonas[];
  mustUpdate;
 
  //fila:string  = '<tr><th scope="row">' + this.title + '</th><td>' + this.title  + '</td><td>' + this.title  + `</td><td><button type="button" class="btn btn-outline-secondary">Acciones</button></td></tr>`
  constructor(private Zs: ZonaService  ){

  }
  async ngOnInit(){

    //console.log(this.Zs.getZonas().subscribe());
    //this.Zs.getZonas().subscribe(data =>this.zonas = data)
    //console.log("tada",this.zonas);
    //this.subscription.unsubscribe();
    //setInterval(this.UpdateCampo, 3000);
    await this.UpdateCampo("Primera vez");
    
    /*
    const contador = interval(1000);

    
    contador.subscribe((n) =>{
      
      if(this.mustUpdate == true){
      console.log("repitiendo update: ",n )
      this.UpdateCampo();
      }
    }
    );
    */
    
  

  }
  async UpdateCampo(s:string){

    console.log("momento ", this.momento);
    this.momento = this.momento + 1;     
     this.Zs.getZonas().subscribe(
       data =>{console.log("componente ppal--> ",this.zonas = data , " s:", s )} 
       
       );
       this.Size_of_array();
    

  }
  Size_of_array(){

    this.Zs.getZonas().subscribe(
      data =>{console.log("tamaño-->", this.zonas.length) } 
      
      );
  }
  recibirMensaje(event: any ){

     this.mustUpdate = event;
     console.log("se activa la señal del componente hijo:", event );
      
      this.UpdateCampo("al recibir la orden del comp hijo")
     
     
  
  }
  

}
