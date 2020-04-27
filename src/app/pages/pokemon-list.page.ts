import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../services/web-api.service';
import { GenericListing, PokemonDetails } from '../models/pokemon.model';

@Component({
	selector: 'pokemon-list-page',
	templateUrl: './pokemon-list.page.html',
})
export class PokemonListPage implements OnInit {
	listing: GenericListing;
	pokemons: PokemonDetails[];

	constructor(private api: WebApiService) { }

	ngOnInit() {
		this.pokemons = [];

		this.loadPokemons();
	}

	loadPokemons() {
		this.api.pokemonList().subscribe((listing: GenericListing) => {
			this.listing = { ...listing };

			listing.results.forEach((pokemon, index) => {
				this.api.get(pokemon.url).subscribe(pokemon => {
					this.pokemons[index] = pokemon;
				});
			});
		});
	}
}
