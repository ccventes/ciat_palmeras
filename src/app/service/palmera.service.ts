import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import {environment} from '../../environments/environment';
import { Palmeras } from '../interfaces/palmeras';

@Injectable({
  providedIn: 'root'
})
export class PalmeraService {

  public env: string = environment.location;
   
  constructor(private http: HttpClient) { }
  
  getPalmeras(): Observable<Palmeras[]> {

    
    if(this.env  == 'local'){

      return this.http.get<Palmeras[]>('http://localhost:8080/palmera');
                      
    }
    else{

      return this.http.get<Palmeras[]>('http://ciat-palmeras-def.herokuapp.com/palmera');
    }
  }

  addPalmera(palmera:Palmeras): Observable<Palmeras>{

    
    if(this.env  == 'local'){

      return this.http.post<Palmeras>('http://localhost:8080/palmera',palmera);
    }
    else{

      return this.http.post<Palmeras>('http://ciat-palmeras-def.herokuapp.com/palmera',palmera);
    }
  }
}
