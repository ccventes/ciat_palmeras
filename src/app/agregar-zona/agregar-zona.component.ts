import { Component, OnInit, Input, Output } from '@angular/core';
import {FormsModule} from '@angular/forms'; //modulo agregado
import { ZonaService } from '../service/zona.service';
import { Zonas } from '../interfaces/zonas';
import{ Subscription,interval, timer,Observable} from 'rxjs';
import { EventEmitter } from '@angular/core';
import { textChangeRangeIsUnchanged } from 'typescript';


@Component({
  selector: '.agregar-zona',
  templateUrl: './agregar-zona.component.html',
  styleUrls: ['./agregar-zona.component.css']
})
export class AgregarZonaComponent implements OnInit {

  counter: number |undefined;
  Earea: string;
  showAlert = false;
  showSucces = false;
  //@Input() zonas = []; // decorate the property with @Input()
  @Output() enviarMsje: EventEmitter<boolean> = new EventEmitter<boolean>();
  ShouldUpdate = false;
  
  zonas: Zonas[];
  

  constructor(private Zsv: ZonaService) { }

  async ngOnInit() {
     
    
    await this.Size_of_array();
          
    


  }
  CheckInteger(event: any){

    const a = isNaN(Number(this.Earea));
    const b = Number(this.Earea);

    if(a == true || (b < 50 || b > 5000) ){

      this.showAlert = true;
      console.log(b);
    }
    else{

      this.showAlert = false;
    }



  }
  async increment_counter(){

    this.counter = this.counter + 1;
  }
  async SaveNew(){

    console.log("entro al savenew")
    console.log("El arreglo : ",this.counter) // hasta aqui tengo el tamaño del arreglo
    
    if(this.counter !== undefined){
       await this.Size_of_array();  
    }
    
    //this.Zs.addZona(NZ).subscribe(data => console.log(data));
    
    
    if(this.showAlert == false && this.Earea != '' && this.counter !== undefined ){
      console.log("!!!!!!!!counter es en estos momentos!!!!!!!!!!", this.counter);
      await this.increment_counter();
      this.insert_element().then(res => this.GiveorderUpdate(true));      
      
                               
      this.Earea = "";
      this.showSucces = true;
      await this.GiveorderUpdate(true);
      
    }
    if(this.showSucces == true){
      
      //const contador = interval(2000);

      //contador.subscribe((n) =>{
      //  console.log("repeticion exito: ",n )
        this.showSucces = false;
      //}
      //);


    }
    //await this.GiveorderUpdate(false);
    //enviar orden para no hacer mas update
  }
  async  Size_of_array(){
    //this.counter = 6;
    console.log("tamaño antes", this.counter)
    const t = await this.Zsv.getZonas().subscribe(data => {
      this.zonas = data
      this.counter = this.zonas.length;
    })
    
    console.log("jesucristo ", this.counter);
  }
  async GiveorderUpdate(o:boolean){

     console.log("he enviado el mensaje"); 
     this.enviarMsje.emit(this.ShouldUpdate = o);
     console.log("di la orden")

  }

  async insert_element(){
    console.log("inserte")
    return new Promise((resolve,reject) => {
    const NZ = {numero: (this.counter ).toString(), area: this.Earea}
    const tt = this.Zsv.addZona(NZ).subscribe(data => console.log(data));
    })
  }

}
