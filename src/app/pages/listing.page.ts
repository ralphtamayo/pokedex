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
}
