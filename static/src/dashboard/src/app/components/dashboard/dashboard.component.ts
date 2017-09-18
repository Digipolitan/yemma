import { Component, OnInit } from '@angular/core';
import { RegistryService, SessionService } from '../../services';
import { InstanceDataRegistry } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  protected registry?: InstanceDataRegistry;
  protected registryError?: boolean;

  public constructor(private registryService: RegistryService,
                     private sessionService: SessionService,
                     private router: Router) { }

  ngOnInit(): void {
    this.registryService.statuses().subscribe(registries => {
      this.registry = new InstanceDataRegistry(registries);
    }, err => {
      this.registryError = true;
    });
  }

  onDisconnect(): void {
    this.sessionService.clear();
    this.router.navigate(['/login']);
  }
}
