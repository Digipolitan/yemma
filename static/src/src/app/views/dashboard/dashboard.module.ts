import {NgModule} from '@angular/core';

import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from "@angular/common";
import {RegistryService} from "../../services/registry/registry.service";
import {FilterPipe} from "../../pipes/realm-filter.pipe";
import {FormsModule} from "@angular/forms";
import {MomentModule} from "angular2-moment";

@NgModule({
    providers: [
        RegistryService,
    ],
    imports: [
        DashboardRoutingModule,
        CommonModule,
        FormsModule,
        MomentModule
    ],
    declarations: [DashboardComponent, FilterPipe]
})
export class DashboardModule {
}
