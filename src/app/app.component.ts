import { Component, OnInit } from '@angular/core';
import {environment} from '../environments/environment';
import { ZonaService } from './service/zona.service'
import { Zonas } from './interfaces/zonas';
import { Informacion } from './interfaces/informacion';
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
  RecPalm: any[]; // palmeras recibidas
  PPZ: Array<number> = [0]; //palmeras per zone
  mustUpdate;
  info:Informacion;
  
 
 
  //fila:string  = '<tr><th scope="row">' + this.title + '</th><td>' + this.title  + '</td><td>' + this.title  + `</td><td><button type="button" class="btn btn-outline-secondary">Acciones</button></td></tr>`
  constructor(private Zs: ZonaService ){

  }
  async ngOnInit(){

    //console.log(this.Zs.getZonas().subscribe());
    //this.Zs.getZonas().subscribe(data =>this.zonas = data)
    //console.log("tada",this.zonas);
    //this.subscription.unsubscribe();
    //setInterval(this.UpdateCampo, 3000);
    await this.UpdateCampo("Primera vez");
    this.info = {  zone: 0,
              saludables: 0,
              gualpa: 0,
              total: 0,
              estado:0,
              er:0,


    }
    
    
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

     //this.mustUpdate = event;
     console.log("se activa la señal del componente hijo:", event );
      
      
     setTimeout(()=>{                           // <<<---using ()=> syntax
      this.zonas = event;
      this.UpdateCampo("al recibir la orden del comp hijo");
    }, 3000);
     
  }
  recibirPalmeras(event: any){

    console.log("El componente padre ha recibido las palmeras: ", event );
    setTimeout(()=>{                           // <<<---using ()=> syntax
      
      this.RecPalm =event;
      this.countPalmeras(event);
    }, 800);
    
  }
  async countPalmeras(p:any){
    let contador:number = 1;
    console.log("p ",p)
    //this.PPZ.push(0);
    for(var index in p){

      if(p[index].zonaID == contador){
        this.PPZ[contador - 1] = this.PPZ[contador - 1] + 1;

      }
      else{
        contador = contador + 1;
        this.PPZ.push(1);

      }
    }
    console.log(this.PPZ);


  }

  async EnviarAccion(i:number){

    console.log("se ha hecho click en enviar acción ", i);
    
    console.log("palmeras recibidas", this.RecPalm);
    await this.contarTipoPlanta(this.RecPalm, i)
    
    
    //{zona: i + 1; saludables: 0 ; gualpa: 0 ; total: 0; estado: 0 }
    
    
    
  }
  async contarTipoPlanta(palm:any, i:number){
    console.log("funcion contar tipos de palma");
    console.log("palma ", this.RecPalm);
    console.log("boton ", i);
    console.log("PPZ en contarTipoPlanta", this.PPZ)
    
    this.info.zone = i + 1;

    this.info.saludables = 0;
    this.info.gualpa = 0;
    this.info.total = 0;
    this.info.estado = 0;
    this.info.er = 0;

    for(var index in this.RecPalm){
      
      if(this.RecPalm[index].zonaID == this.info.zone){
        console.log("tipo de palmera", this.RecPalm[index].tipo );
      
        if(this.RecPalm[index].tipo == 'saludable'){
              this.info.saludables = this.info.saludables + 1;
        }
        if(this.RecPalm[index].tipo == 'gualpa'){
              this.info.gualpa = this.info.gualpa + 1;
        }
        if(this.RecPalm[index].tipo == "escama roja"){
              this.info.er = this.info.er + 1;
        }
      }

  }
  this.info.total =this.PPZ[i];
  if(this.info.total == 0 ){

    this.info.estado = 2;
  }
  else{

    this.info.estado = 3;
  }
  console.log(this.info);



  }
  

}
