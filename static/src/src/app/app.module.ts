import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {AppComponent} from './app.component';

// Import containers
import {
    FullLayout,
    SimpleLayout
} from './containers';

const APP_CONTAINERS = [
    FullLayout,
    SimpleLayout
]

// Import components
import {
    AppSidebar
} from './components';

const APP_COMPONENTS = [
    AppSidebar
];

// Import directives
import {
    AsideToggleDirective,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
    AsideToggleDirective,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES
];

// Import routing module
import {AppRoutingModule} from './app.routing';

// Import 3rd party components
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {APP_SERVICES} from "./services/index";
import {HttpModule} from "@angular/http";
import {MomentModule} from "angular2-moment";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        ChartsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        ...APP_CONTAINERS,
        ...APP_COMPONENTS,
        ...APP_DIRECTIVES,
    ],
    providers: [
        APP_SERVICES,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
