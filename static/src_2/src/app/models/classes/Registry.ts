import {IInstance} from "../interfaces/IInstance";
import {IRegistry} from "../interfaces/IRegistry";

export class Registry implements IRegistry {
  public instances: { string: IInstance[] };
  public realms: string[] = [];

  constructor(instances: IInstance[]) {
    const self = this;
    this.instances = instances.reduce(setInstancesByRealm, {});

    function setInstancesByRealm(result, instance) {
      if (self.realms.indexOf(instance.realm) === -1)
        self.realms.push(instance.realm);

      if (result[instance.realm])
        result[instance.realm].push(instance);
      else
        result[instance.realm] = [instance];

      return result;
    }
  }
}
