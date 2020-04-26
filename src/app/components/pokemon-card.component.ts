import { Component, Input } from '@angular/core';
import { PokemonDetails } from '../models/pokemon.model';

@Component({
	selector: 'pokemon-card',
	templateUrl: './pokemon-card.component.html',
})
export class PokemonCardComponent {
	@Input() pokemon: PokemonDetails;
}
