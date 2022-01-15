import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  
  pokemonId:string = '' ;
  pokemon:any ;
  url:string = "https://pokeapi.co/api/v2/pokemon";

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute) { 
    
  }
  
  ngOnInit(): void {
    this.pokemonId = this.route.snapshot.paramMap.get('id') || "0";
    this.pokemonService.getPokemon(`${this.url}/${this.pokemonId}`)
            .subscribe((uniqResponse:any) => {
              this.pokemon = uniqResponse;
            })
  }

}
