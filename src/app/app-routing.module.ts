import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {
    path: 'home',
    component: PokemonComponent,
  },
	{
		path: 'pokemon/:id',
		component: PokemonDetailComponent,
	},
  {
		path: '**',
		redirectTo: '/home',
		pathMatch: 'prefix',
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
