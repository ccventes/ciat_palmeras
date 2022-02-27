import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: '.Acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.css']
})
export class AccionesComponent implements OnInit {
  mensajeZona:string = "No hay zona seleccionada";
  EstadoMsje:number = 1;
  //@Input() 
  //info:any;
  private _info:any;

  @Input()
  set info(value:any){

      value = value || {zone:0, estado:1,gualpa:0, saludables:0, total:0 }
      this._info = value;
      if(value.estado == 1){

        this.mensajeZona = "No hay zona seleccionada";


      }
      if(value.estado == 2){

        this.mensajeZona = "Zona" + value.zone.toString() + " no contiene palmeras";

      }

      if(value.estado == 3){

        this.mensajeZona = "Datos zona: " + value.zone.toString();

      }
  }
  get info(){return this._info;}

  

  
  
  constructor() { }

  ngOnInit(): void {
    
     console.log("ya no dberia ser necesario este log",this.info);/*
     setTimeout(()=>{                           // <<<---using ()=> syntax
      
      
      console.log("0.8 segundos despues ", this.info)
    }, 800);
    */
  }

}
