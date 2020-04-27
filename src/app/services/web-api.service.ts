import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PokemonDetails, GenericListing } from '../models/pokemon.model';
import { Observable } from 'rxjs';

@Injectable()
export class WebApiService {
	constructor(private http: HttpClient) { }

	pokemonList(params: HttpParams = new HttpParams()): Observable<GenericListing> {
		return this.http.get<GenericListing>(`${environment.apiUrl}/pokemon/`, { params: params });
	}

	pokemonDetails(id: number): Observable<PokemonDetails> {
		return this.http.get<PokemonDetails>(`${environment.apiUrl}/pokemon/${id}`);
	}

	get(url: string): Observable<PokemonDetails> {
		return this.http.get<PokemonDetails>(url);
	}
}
