import {Injectable} from '@angular/core';
import {ISession} from "../../models/interfaces/ISession";

@Injectable()
export class SessionService {
  private session?: ISession;

  constructor() {
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
    if (this.session === undefined) {
      const str = localStorage.getItem('session');
      if (str !== null) {
        this.session = JSON.parse(str);
      }
    }
    return this.session;
  }
}
