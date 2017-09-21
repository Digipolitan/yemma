import { IInstance } from '../interfaces';

export class Instance implements IInstance{
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
  }
}
