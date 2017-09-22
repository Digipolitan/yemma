import {SessionService} from '../session/session.service';

export abstract class APIService {

    constructor(protected sessionService?: SessionService) {
    }

    public buildPath(path: [String]) {
        const location = window.location;
        const port = this.sessionService.get().port;
        return `${location.protocol}//${location.hostname}${( port != 80 ? ':' + port : '')}/${path.join('/')}`;
    }
}
