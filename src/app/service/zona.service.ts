import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { Zonas } from '../interfaces/zonas';


@Injectable({
  providedIn: 'root'
})
export class ZonaService {

  public env: string = environment.location;
  constructor(private http: HttpClient) { }
  
  getZonas(): Observable<Zonas[]> {

    
    if(this.env  == 'local'){

      return this.http.get<Zonas[]>('http://localhost:8080/zonas');
    }
    else{

      return this.http.get<Zonas[]>('http://ciat-palmeras-def.herokuapp.com/zonas');
    }
  }
}
