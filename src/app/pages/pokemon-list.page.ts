import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../services/web-api.service';
import { GenericListing } from '../models/pokemon.model';

@Component({
	selector: 'pokemon-list-page',
	templateUrl: './pokemon-list.page.html',
})
export class PokemonListPage implements OnInit {
	pokemons: GenericListing;

	constructor(private api: WebApiService) { }

	ngOnInit() {
		this.loadPokemons();
	}

	loadPokemons() {
		this.api.pokemonList()
			.subscribe((listing: GenericListing) => {
				this.pokemons = listing;
			});
	}
}
