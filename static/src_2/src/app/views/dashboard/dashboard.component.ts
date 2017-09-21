import { Component, OnInit } from '@angular/core';
import { RegistryService, SessionService } from '../../services';
import { Router } from '@angular/router';
import { IRegistry } from "../../models/interfaces/IRegistry";
import { Registry } from "../../models/classes/Registry";
import "rxjs/add/operator/take";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  protected registry: IRegistry;

  public constructor(private registryService: RegistryService,
                     private sessionService: SessionService,
                     private router: Router) { }

  ngOnInit(): void {
    this.registryService
      .statuses()
      .take(1)
      .subscribe(instances => this.registry = new Registry(instances))
  }

  onDisconnect(): void {
    this.sessionService.clear();
    this.router.navigate(['/login']);
  }
}
