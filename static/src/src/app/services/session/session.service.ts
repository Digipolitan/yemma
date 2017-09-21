import {Injectable} from '@angular/core';
import {ISession} from "../../models/interfaces/ISession";
import {Session} from "../../models/classes/Session";

@Injectable()
export class SessionService {
    private session: ISession;

    constructor() {
        const str = localStorage.getItem('session');
        if (str)
            this.session = JSON.parse(str);
    }

    public store(session: ISession) {
        this.session = session;
        localStorage.setItem('session', JSON.stringify(session));
    }

    public clear() {
        this.session = undefined;
        localStorage.removeItem('session');
    }

    public get(): ISession {
        if (this.session === undefined)
            this.store(new Session());

        return this.session;
    }
}
