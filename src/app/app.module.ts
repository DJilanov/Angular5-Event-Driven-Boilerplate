import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FeedbackModule } from './feedback/feedback.module';

import { AppComponent } from './app.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { InformationalPageComponent } from './informational-page/informational-page.component';

@NgModule({
	declarations: [
		AppComponent,
		ContactPageComponent,
		InformationalPageComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpModule,
		CoreModule,
		SharedModule,
		FeedbackModule,
	],
	providers: [CoreModule],
	bootstrap: [AppComponent]
})
export class AppModule { }
