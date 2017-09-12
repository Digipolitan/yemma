import { Component, OnInit } from '@angular/core';
import { RegistryService } from '../../services';
import { InstanceDataRegistry } from '../../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  protected registry?: InstanceDataRegistry;

  public constructor(private registryService: RegistryService) { }

  ngOnInit(): void {
    this.registryService.statuses().subscribe(registries => {
      this.registry = new InstanceDataRegistry(registries);
    });
  }
}
