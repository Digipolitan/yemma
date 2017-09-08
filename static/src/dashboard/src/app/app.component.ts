import { Component, OnInit } from '@angular/core';
import { RegistryService } from './services';
import { InstanceData, InstanceDataRegistry } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  protected registry?: InstanceDataRegistry;

  public constructor(private registryService: RegistryService) { }

  ngOnInit(): void {
    this.registryService.statuses().subscribe(registries => {
      this.registry = new InstanceDataRegistry(registries);
    });
  }
}
