import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {IRegistry} from "../../models/interfaces/IRegistry";
import {Registry} from "../../models/classes/Registry";

import {RegistryService} from "../../../../../src/src/app/services/registry/registry.service";
import {SessionService} from "../../../../../src/src/app/services/session/session.service";
import "../../../../../src/node_modules/rxjs/add/operator/take";
import {ISession} from "../../models/interfaces/ISession";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    protected registry: IRegistry;
    protected session: ISession;

    searchText: string;
    public constructor(private registryService: RegistryService,
                       private sessionService: SessionService) {

        this.session = this.sessionService.get();
    }

    ngOnInit(): void {
        this.registryService
            .statuses()
            .take(1)
            .subscribe(instances => this.registry = new Registry(instances))
    }
}
