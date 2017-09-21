import {Injectable} from '@angular/core';
import {Http, ResponseContentType, Headers} from '@angular/http';
import {APIService} from '../api/api.service';
import {SessionService} from '../session/session.service';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/mergeMap";
import {Instance} from "../../models/classes/Instance";
import "rxjs/add/operator/toArray";

@Injectable()
export class RegistryService extends APIService {

    constructor(private http: Http,
                protected sessionService: SessionService) {
        super(sessionService);
    }

    public statuses() {
        let headers = new Headers();
        headers.append('access-token', this.sessionService.get().accessToken);

        const path = this.buildPath(['registry', 'statuses']);

        return this.http
            .get(path, {headers: headers, responseType: ResponseContentType.Json})
            .map(res => res.json())
            .map(instances => instances.map(data => new Instance(data)))
    }
}
