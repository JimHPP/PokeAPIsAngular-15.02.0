import { Component, Input, OnInit } from '@angular/core';
import { ApiConexionService } from 'src/app/shared/services/api-conexion.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input()
  public pokemon: any;

  constructor(private apiConexion: ApiConexionService){
  }
  ngOnInit(): void {
    this.pokemonsByName(this.pokemon.name);
  }

  public pokemonsByName(name: string){
    this.apiConexion.getPokemonByName(name).subscribe(
      (data:any) =>{this.pokemon.url = data.sprites.front_default;
      this.pokemon.id = data.id;}
    );
  }
}
