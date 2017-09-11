import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { APIService } from '../api/api.service';
import { InstanceData } from '../../models';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistryService {

  constructor(private http: Http) {
  }

  public statuses() {
    return this.http.get(APIService.buildPath([
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
