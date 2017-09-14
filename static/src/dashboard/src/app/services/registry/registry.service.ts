import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { APIService } from '../api/api.service';
import { InstanceData } from '../../models';
import { SessionService } from '../session/session.service';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistryService extends APIService {

  constructor(private http: Http,
              protected sessionService: SessionService) {
    super(sessionService);
  }

  public statuses() {
    return this.http.get(this.buildPath([
      'registry',
      'statuses'
    ]), {
      responseType: ResponseContentType.Json
    }).map(res => {
      const registries: [InstanceData] = res.json();
      return registries;
    });
  }
}
