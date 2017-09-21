import {SessionService} from '../session/session.service';

export abstract class APIService {

    constructor(protected sessionService?: SessionService) {
    }

    public buildPath(path: [String]) {
        const location = window.location;
        return `${location.protocol}//${location.hostname}:${this.sessionService.get().port}/${path.join('/')}`;
    }
}
