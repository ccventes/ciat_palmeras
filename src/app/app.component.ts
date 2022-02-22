import { Component } from '@angular/core';
import {environment} from '../environments/environment';
import { ZonaService } from './service/zona.service'
import { Zonas } from './interfaces/zonas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ciat_palmera_frontend';
  public env: string = environment.location;
  zonas: Zonas[];
  //fila:string  = '<tr><th scope="row">' + this.title + '</th><td>' + this.title  + '</td><td>' + this.title  + `</td><td><button type="button" class="btn btn-outline-secondary">Acciones</button></td></tr>`
  constructor(private Zs: ZonaService  ){

  }
  ngOnInit(){

    //console.log(this.Zs.getZonas().subscribe());
    this.Zs.getZonas().subscribe(data =>this.zonas = data)

  }

}
