import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Collections } from './collections';
import {Cd} from './cd';

@Injectable()

// Service for collections data.
export class CollectionService {

  // We need Http to talk to a remote server.
  constructor(private _http: Http) { }

  // Get list of collections from remote server.
  readCollections(): Observable<Collections[]>  {
    return this._http
      .get('http://localhost:8000/api/collections')
      .map(res => res.json());
  }
  // Send cd data to remote server to create it.
  createCollection( collection: any ): Observable<Collections> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(
      'http://localhost:8000/api/create_collection',
      collection,
      options
    ).map(res => res.json());
  }

}
