import { InstanceData } from '../interfaces';

export class InstanceDataRegistry {
  registry?: { [key: string]: InstanceData[] };

  public constructor(array: InstanceData[]) {
    this.registry = array.reduce((out, instance) => {
      if (out.hasOwnProperty(instance.realm)) {
        out[instance.realm].push(instance);
      } else {
        out[instance.realm] = [instance];
      }
      return out;
    }, {});
  }

  public realms(): string[] {
    return Object.keys(this.registry);
  }

  public forRealm(realm: string): InstanceData[] {
    return this.registry[realm];
  }
}
