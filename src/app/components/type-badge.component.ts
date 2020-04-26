import { Component, Input } from '@angular/core';

@Component({
	selector: 'type-badge',
	templateUrl: './type-badge.component.html',
})
export class TypeBadgeComponent {
	@Input() type: PokemonType;

	get label() {
		return PokemonType.format(this.type);
	}

	get badgeBg() {
		return `badge-${this.type}`;
	}
}

export enum PokemonType {
	Normal = 'normal',
	Fire = 'fire',
	Fighting = 'fight',
	Water = 'water',
	Flying = 'flying',
	Grass = 'grass',
	Poison = 'poison',
	Electric = 'electric',
	Ground = 'ground',
	Psychic = 'psychic',
	Rock = 'rock',
	Ice = 'ice',
	Bug = 'bug',
	Dragon = 'dragon',
	Ghost = 'ghost',
	Dark = 'dark',
	Steel = 'steel',
	Fairy = 'fairy',
	QMark = 'qmark',
}

export namespace PokemonType {
	let labels = {
		[PokemonType.Normal]: 'Normal',
		[PokemonType.Fire]: 'Fire',
		[PokemonType.Fighting]: 'Fighting',
		[PokemonType.Water]: 'Water',
		[PokemonType.Flying]: 'Flying',
		[PokemonType.Grass]: 'Grass',
		[PokemonType.Poison]: 'Poison',
		[PokemonType.Electric]: 'Electric',
		[PokemonType.Ground]: 'Ground',
		[PokemonType.Psychic]: 'Psychic',
		[PokemonType.Rock]: 'Rock',
		[PokemonType.Ice]: 'Ice',
		[PokemonType.Bug]: 'Bug',
		[PokemonType.Dragon]: 'Dragon',
		[PokemonType.Ghost]: 'Ghost',
		[PokemonType.Dark]: 'Dark',
		[PokemonType.Steel]: 'Steel',
		[PokemonType.Fairy]: 'Fairy',
		[PokemonType.QMark]: '???',
	};

	export function format(type: PokemonType): string {
		return labels[type];
	}
}
