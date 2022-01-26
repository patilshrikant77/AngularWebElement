import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
    declarations: [
        CalculatorComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [],
    entryComponents: [CalculatorComponent]
})
export class AppModule {

    constructor(private injector: Injector) {
        const customElement = createCustomElement(CalculatorComponent, { injector });
        customElements.define('app-calculator', customElement);
    }
}
