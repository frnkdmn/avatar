import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemons: any[] = [];

  constructor(
    private pokemonService: PokemonService, 
    private _config: NgbCarouselConfig,
    private router: Router) {
      //_config.interval = 3000;
      _config.showNavigationIndicators = false
     }

  ngOnInit(): void {

    this.pokemonService.getAllPokemons()
      .subscribe((response:any) => {
        response.results.forEach((result: any) => {
          this.pokemonService.getPokemon(result.url)
            .subscribe((uniqResponse:any) => {
              this.pokemons.push(uniqResponse);
            })
        })
      });
    
  }

  navigate(pokemon:any){
    this.router.navigate(['pokemon',pokemon.id]);
  }

}
