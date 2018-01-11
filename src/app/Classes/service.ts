import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Cd } from './cd';
import {Collections} from './collections';
// import {useAnimation} from '@angular/core/src/animation/dsl';



@Injectable()

// Service for Cds data.
export class Service {

  // We need Http to talk to a remote server.
  constructor(private _http: Http) { }

  // Get list of cds from remote server.
  readCds(collection_id: any): Observable<Cd[]>  {
    return this._http
      .get('http://localhost:8000/api/cds/'+ collection_id)
      .map(res => res.json());
  }
  // Get list of collection name from remote server.
  readCollectionName(collection_id: any): Observable<string>  {
    return this._http
      .get( 'http://localhost:8000/api/collectionName/' + collection_id)
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
  // Get a cd details from remote server.
  readOneCd(cd_id: any): Observable<Cd> {
    return this._http
      .get('http://localhost:8000/api/read_one_cd/' + cd_id)
      .map(res => res.json());
  }
  updateCd(cd: any): Observable<Cd> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log('herein the service');
    console.log(cd);
    return this._http.post(
      'http://localhost:8000/api/updatecd',
      cd,
      options
    ).map(res => res.json());
  }
  // Send cf ID to remote server to delete it.
  deleteCd(cd_id: any) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(
      'http://localhost:8000/api/deletecd',
      { id: cd_id },
      options
    ).map(res => res.json());
  }

  readCdsCount(collection_id: any): Observable<number> {
    return this._http
      .get('http://localhost:8000/api/count_cds/' + collection_id)
      .map(res => res.json());
  }

}
