import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactPageComponent } from './contact-page/contact-page.component';
import { InformationalPageComponent } from './informational-page/informational-page.component';
import { ServerErrorPageComponent } from './feedback/server-error-page/server-error-page.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: ContactPageComponent
	},
	{
		path: 'contact',
		component: ContactPageComponent
	},
	{
		path: 'docs',
		component: InformationalPageComponent
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
