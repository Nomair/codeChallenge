import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Collections } from './collections';

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


}
