import {NgModule} from '@angular/core';

import {CommonModule} from "@angular/common";
import {SettingsComponent} from "./settings.component";
import {SessionService} from '../../services/session/session.service';
import {SettingsRoutingModule} from "./settings-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    providers: [
        SessionService
    ],
    imports: [
        ReactiveFormsModule,
        SettingsRoutingModule,
        CommonModule
    ],
    declarations: [SettingsComponent]
})
export class SettingsModule {
}
