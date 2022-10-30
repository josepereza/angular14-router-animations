import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 
    
  }

  getAll(texto:string | null){
    console.log(texto)
    return this.http.get( `https://rickandmortyapi.com/api/character/?name=${texto}`)
  }
}
