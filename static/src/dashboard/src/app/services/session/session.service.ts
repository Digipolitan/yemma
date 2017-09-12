import { Injectable } from '@angular/core';
import { SessionData } from '../../models';

@Injectable()
export class SessionService {

  private session?: SessionData;

  constructor() { }

  public store(session: SessionData) {
    this.session = session;
    localStorage.setItem('session', JSON.stringify(session));
  }

  public clear() {
    this.session = undefined;
    localStorage.removeItem('session');
  }

  public get(): SessionData {
    if (this.session === undefined) {
      const str = localStorage.getItem('session');
      if (str !== undefined) {
        this.session = JSON.parse(str);
      }
    }
    return this.session;
  }
}
