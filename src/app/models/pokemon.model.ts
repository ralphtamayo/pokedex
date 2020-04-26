export interface PokemonDetails {
	id: number;
	name: string;
	baseExperience: number;
	height: number;
	isDefault: boolean;
	order: number;
	weight: number;
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
