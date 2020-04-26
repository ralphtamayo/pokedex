import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCardComponent } from './components/pokemon-card.component';
import { TypeBadgeComponent } from './components/type-badge.component';
import { HttpClientModule } from '@angular/common/http';
import { WebApiService } from './services/web-api.service';
import { PokemonListPage } from './pages/pokemon-list.page';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: PokemonListPage },
];

@NgModule({
	declarations: [
		AppComponent,
		PokemonCardComponent,
		TypeBadgeComponent,

		PokemonListPage,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule,
	],
	providers: [WebApiService],
	bootstrap: [AppComponent]
})
export class AppModule { }
