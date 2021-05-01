import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'pokemon-list',
	templateUrl: './listing.page.html',
})
export class PokemonListingPage implements OnInit {
	listing: any;

	constructor(private http: HttpClient) { }

	ngOnInit() {
		return this.http.get('https://pokeapi.co/api/v2/pokemon/', { params: { 'limit': '20' } })
			.subscribe(response => this.listing = response);
	}

	getImage(pokemon: any) {
		const id = pokemon.url.split('/pokemon/')[1].replace('/', '');
		return `https://pokeres.bastionbot.org/images/pokemon/${ id }.png`;
	}
}
