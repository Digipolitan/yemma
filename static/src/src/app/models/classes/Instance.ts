import {IInstance} from '../interfaces';

export class Instance implements IInstance {
    created_at: string;
    updated_at: string;
    address: string;
    port: number;
    realm: string;
    access_token: string;
    timeout: number;
    ttl: string;


    public constructor(data) {
        this.address = data.address;
        this.port = data.port;
        this.realm = data.realm;
        this.access_token = data.access_token;
        this.timeout = data.timeout;
        this.ttl = data.ttl;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
    }
}
