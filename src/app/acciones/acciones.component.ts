import { Component, OnInit,Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: '.Acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.css']
})
export class AccionesComponent implements OnChanges {
  mensajeZona:string = "No hay zona seleccionada";
  EstadoMsje:number = 1;
  opcionSeleccionado:string = "saludable";
  @Output()
  EnviarmsjeP: EventEmitter<any> = new EventEmitter<any>();  
  //info:any;
  private _info:any;

  @Input()
  set info(value:any){

      value = value || {zone:0, estado:1, gualpa:0, saludables:0, total:0, er:0 }
      console.log("<-----------11antes-------->", value)
      this._info = value;
      this.mensajeZona = "No hay zona seleccionada";
      
      if(this._info.total > 0){this._info.estado = 3; this.EstadoMsje = 3}
      if(this._info.total == 0 && this.EstadoMsje != 1){this._info.estado = 2; this.EstadoMsje = 3}
      if(this._info.total == 0 && this.EstadoMsje == 1){this._info.estado = 1;}
      
      console.log("<-----------11Valor de info-------->", value)
      if(this._info.estado == 3){

        this.mensajeZona = "información Zona " + this._info.zone + ":";
  
  
      }
      if(this._info.estado == 2){

        this.mensajeZona = "Zona " + this._info.zone + " no contiene palmeras";
  
  
      }
      
  }
  get info(){return this._info;}
 
  constructor() { }

  ngOnChanges(changes:SimpleChanges): void {
    //console.log("onchanges info ", changes)
   
  }
  InsertPalmera(){

    console.log("opcion de palmera seleccionada" + this.opcionSeleccionado + "zona " + this._info.zone);
    let respuesta:string[] = [this.opcionSeleccionado,this._info.zone.toString() ]
    
    setTimeout(()=>{                           // <<<---using ()=> syntax
      console.log("mensaje emitido tras 300 ms");
      this.EnviarmsjeP.emit(respuesta);
    }, 300);
  }

}
