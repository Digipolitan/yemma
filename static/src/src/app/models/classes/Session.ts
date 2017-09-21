import {ISession} from "../interfaces/ISession";

export class Session implements ISession {
    port: number;
    accessToken: string;

    constructor(port?: number, accessToken?: string) {
        this.port = port || Number(location.port);
        this.accessToken = accessToken || '';
    }
}
