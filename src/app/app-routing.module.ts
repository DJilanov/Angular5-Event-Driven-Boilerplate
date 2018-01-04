import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerErrorPageComponent } from './feedback/server-error-page/server-error-page.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/server-error',
		pathMatch: 'full'
	},
	{
		path: 'server-error',
		component: ServerErrorPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }
