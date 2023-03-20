import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { ApiConexionService } from 'src/app/shared/services/api-conexion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public listaPokemons:any;
  public items: any[]=[];
  @ViewChildren('pokemonClass', { read: ElementRef }) public pokemonClass!: QueryList<ElementRef>;
  constructor(private apiConexion: ApiConexionService, private renderer2: Renderer2) {
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  public getPokemons(){
    this.apiConexion.getAllPokemons().subscribe(
      data =>{
        this.listaPokemons = data;
        for(let poke of this.listaPokemons.results){
          this.items.push(poke.name);
        }
      }
    );  }

    public addMorePokemons(url: string){
      this.apiConexion.getUrl(url).subscribe(
        (data:any) =>{
          this.listaPokemons.results = [... this.listaPokemons.results, ... data.results];
          for(let poke of data.results){
            this.items.push(poke.name);
          }
          this.listaPokemons.next = data.next;
        }
      );
    }
    public getValues($e: any){

      this.pokemonClass.forEach(pk => {
        if(pk.nativeElement.querySelector('#nombre_pokemon').innerHTML.includes($e.target.value) || pk.nativeElement.querySelector('#id_pokemon').innerHTML.includes($e.target.value)){

          this.renderer2.setStyle(pk.nativeElement, 'display', 'block');

        }else{
          this.renderer2.setStyle(pk.nativeElement, 'display', 'none');
        }
      });
  }
  ngAfterViewInit(): void {

  }
}
