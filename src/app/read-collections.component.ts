import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CollectionService } from './Classes/collectionservice';
import { Collections } from './Classes/collections';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {forEach} from '@angular/router/src/utils/collection';


/*
    * Needed to notify the 'consumer of this component', which is the 'AppComponent',
      that an 'event' happened in this component.
*/


@Component({
  selector: 'app-read-collections',
  templateUrl: './Html/read-collections.component.html',
  // styleUrls: ['./read-cds.component.css'],
  providers: [CollectionService]
})

@Injectable()
export class ReadCollectionsComponent implements OnInit {
  /*
    * Needed to notify the 'consumer of this component', which is the 'AppComponent',
      that an 'event' happened in this component.
*/
  @Output() show_create_collection_event  = new EventEmitter();
  @Output() show_read_cds_event = new EventEmitter();

  constructor(private service: CollectionService) {}
  collections: Collections[];
  // store list of collections
  // initialize collectionService to retrieve list collections in the ngOnInit()

  // methods that we will use later
  createMyCollection(): void {
    // tell the parent component (AppComponent)
    this.show_create_collection_event.emit({
      title: 'Create Collection'
    });
  }

  readCdsBtn( id: any ): void {
    // tell the parent component (AppComponent)
    this.show_read_cds_event.emit({
      collection_id: id,
      title: 'Read Cds'
    });
  }
    // Read Collections from API.
  ngOnInit() {
    this.service.readCollections()
      .subscribe( collections => {
        this.collections = collections;
      });
  }
}



