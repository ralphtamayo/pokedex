import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCardComponent } from './components/pokemon-card.component';
import { TypeBadgeComponent } from './components/type-badge.component';

const routes: Routes = [];
@NgModule({
	declarations: [
		AppComponent,
		PokemonCardComponent,
		TypeBadgeComponent,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
