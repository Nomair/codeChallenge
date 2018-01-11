import {Component, Output, EventEmitter, Injectable, OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CollectionService } from './Classes/collectionservice';

import { Collections } from './Classes/collections';

@Component({
  selector: 'app-create-collection',
  templateUrl: './Html/create-collection.component.html',
  styleUrls: ['./Css/tablesAdds.css'],
  providers: [ CollectionService]
})

// component for creating a cd record
@Injectable()
export class CreateCollectionComponent implements  OnInit {

  // our angular form
  create_collection_form: FormGroup;

  // @Output will tell the parent component (AppComponent) that an event happened in this component
  @Output() show_read_collections_event = new EventEmitter();
  // list of collections
  collection: Collections[];

  // initialize 'cd service', 'collection service' and 'form builder'
  constructor(
    private collectionService: CollectionService,
    formBuilder: FormBuilder
  ) {


    // based on our html form, build our angular form
    this.create_collection_form = formBuilder.group({
      NAME: ['', Validators.required],
      Desribe: ['', Validators.required],
    });
  }
  readCollectionss(): void {
    this.show_read_collections_event.emit({title: 'Collections-Catálogo'});
  }
  // user clicks 'create' button
  createCollection(): void {

    // send data to server
    this.collectionService.createCollection(this.create_collection_form.value)
      .subscribe(
        collection => {
          // show an alert to tell the user if collection was created or not
          console.log(collection);

          // go back to list of cds
          this.readCollections();
        },
        error => console.log(error)
      );
  }


  // user clicks the 'read cds' button
  readCollections() {
    this.show_read_collections_event.emit({ title: 'Crio/Create Collection',
    });
  }

  // what to do when this component were initialized
  ngOnInit() {

  }
}
