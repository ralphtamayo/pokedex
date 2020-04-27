export interface PokemonDetails {
	id: number;
	name: string;
	baseExperience: number;
	height: number;
	isDefault: boolean;
	order: number;
	weight: number;
	sprites: PokemonSprites;
}

export interface PokemonSprites {
	back_default: string;
	back_female?: string;
	back_shiny?: string;
	back_shiny_female?: string;
	front_default: string;
	front_female?: string;
	front_shiny?: string;
	front_shiny_female?: string;
}

export interface GenericListing {
	count: number,
	next?: string,
	previous?: string
	results: Array<GenericResult>
}

export interface GenericResult {
	name: string,
	url: string,
}
