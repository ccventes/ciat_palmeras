import { Component, OnInit } from '@angular/core';
import {environment} from '../environments/environment';
import { ZonaService } from './service/zona.service'
import { Zonas } from './interfaces/zonas';
import { Informacion } from './interfaces/informacion';
import { forkJoin, Subscription,interval, timer } from 'rxjs';
import{PalmeraService} from './service/palmera.service';
import { Palmeras } from './interfaces/palmeras';
import { EventEmitter } from '@angular/core';




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
  selectedindex:number;
  
  
 
 
  //fila:string  = '<tr><th scope="row">' + this.title + '</th><td>' + this.title  + '</td><td>' + this.title  + `</td><td><button type="button" class="btn btn-outline-secondary">Acciones</button></td></tr>`
  constructor(private Zs: ZonaService,private Ps: PalmeraService ){

  }
  async ngOnInit(){

    await this.UpdateCampo("Primera vez");
     

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
      data =>{console.log("tamaño-->", this.zonas.length); } 
      
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
  insertPalmera(mensaje:any){

    console.log("mensaje de ingesar palmera ", mensaje);
    let sick:boolean = false;
    if(mensaje[0]=='saludable'){
      sick = false;
    }
    else{

      sick = true;
    }
    
    setTimeout(()=>{                           // <<<---using ()=> syntax
      const NP = {tipo: mensaje[0], enfermo: sick, numero: Number(mensaje[1]) }
      console.log("NP", NP)
      const PP = this.Ps.addPalmera(NP).subscribe(data => console.log(data));
      //this.countPalmeras(this.RecPalm);
      this.UpdateNewPalmera(NP.numero ,NP.tipo, NP.enfermo);
      //this.contarTipoPlanta(this.RecPalm, this.selectedindex)
      
    }, 150);
    
  }

  
  
  recibirPalmeras(event: any){

    console.log("El componente padre ha recibido las palmeras: ", event );
    setTimeout(()=>{                           // <<<---using ()=> syntax
      
      this.RecPalm =event;
      this.countPalmeras(event);
    }, 800);
    
  }

  async UpdateNewPalmera(numero:number, tipo:string, enfermo:boolean){

      this.PPZ[numero - 1] = this.PPZ[numero - 1] + 1
      this.info.zone =numero
      if(tipo == 'gualpa'){

         this.info.gualpa = this.info.gualpa + 1;
      }
      if(tipo == 'escama roja'){

        this.info.er = this.info.er + 1;
      }
      if(tipo == 'saludable'){
        this.info.saludables = this.info.saludables + 1;
      }
      //this.RecPalm


      
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
    this.selectedindex = i;
    console.log("palmeras recibidas", this.RecPalm);
    await this.contarTipoPlanta(this.RecPalm, i)
    
    
    //{zona: i + 1; saludables: 0 ; gualpa: 0 ; total: 0; estado: 0 }
    
    
    
  }
  async contarTipoPlanta(palm:any, i:number){
    console.log("funcion contar tipos de palma");
    console.log("palma 3333 ", this.RecPalm);
    console.log("boton ", i);
    console.log("PPZ en contarTipoPlanta", this.PPZ)
   
    this.info = {  zone: i + 1,
      saludables: 0,
      gualpa: 0,
      total: 0,
      estado:0,
      er:0,
   }
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
  console.log("total--->",this.info.total);
  if(this.info.total == 0 ){

    this.info.estado = 2;
  }
  else{

    this.info.estado = 3;
  }
  console.log("info al final ",this.info);



  }
  

}
