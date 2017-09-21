import {IInstance} from "./IInstance";

export interface IRegistry {
    instances: { string: IInstance[] };
    realms: string[]
}
