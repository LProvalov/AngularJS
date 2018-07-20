import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: Http
  ) { }

  get(url: string, args?: RequestOptionsArgs): Observable<any> {
    if (_.isNil(args)) args = {};

    return this._http.get(url, args);
      //.map((res: Response) => this.json(res))
      //.catch();
  }

  post(url: string, data: any, args?: RequestOptionsArgs): Observable<any> {
    if (_.isNil(args)) args = {};
    let requestData = data instanceof ArrayBuffer ? data : JSON.stringify(data);

    return this._http.post(url, requestData, args);
  }

  delete(url: string, args?: RequestOptionsArgs): Observable<any> {
    if (_.isNil(args)) args = {};

    return this._http.delete(url, args);
  }

  private json(res: Response): any {
    return res && res.text() === "" ? res : res.json();
  }
}
