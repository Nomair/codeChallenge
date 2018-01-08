import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Cd } from './cd';
// import {useAnimation} from '@angular/core/src/animation/dsl';



@Injectable()

// Service for Cds data.
export class Service {

  // We need Http to talk to a remote server.
  constructor(private _http: Http) { }

  // Get list of cds from remote server.
  readCds(): Observable<Cd[]>  {
    return this._http
      .get('http://localhost:8000/api/cds')
      .map(res => res.json());
  }

  // Send cd data to remote server to create it.
  createCd( cd: any ): Observable<Cd> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(
      'http://localhost:8000/api/createcd',
      cd,
      options
    ).map(res => res.json());
  }

}
