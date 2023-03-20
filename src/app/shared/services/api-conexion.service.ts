import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConexionService {

  constructor(private httpClient: HttpClient) { }
  public getAllPokemons(){
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon');
  }

  public getPokemonByName(name: string){
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  public getUrl(url: string){
    return this.httpClient.get(url);
  };
}
