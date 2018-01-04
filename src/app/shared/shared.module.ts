import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TranslateDirective } from './translation/directives/translate.directive';
import { TranslateService } from './translation/services/translate.service';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from '../core/module-import-guard';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        TranslateDirective
    ],
    declarations: [
        TranslateDirective
    ],
    providers: [
        TranslateService
    ]
})
export class SharedModule {
	constructor( @Optional() @SkipSelf() parentModule: CommonModule) {
		throwIfAlreadyLoaded(parentModule, 'SharedModule');
	}
}