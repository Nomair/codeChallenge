import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Service } from './Classes/service';
import { CollectionService } from './Classes/collectionservice';
import { Observable } from 'rxjs/Observable';
import { Cd } from './Classes/cd';
import { Collections } from './Classes/collections';

@Component({
  selector: 'app-create-cd',
  templateUrl: './Html/create-cd.component.html',
  // styleUrls: ['./Css/create-cdscomponent.css'],
  providers: [Service, CollectionService]
})

// component for creating a cd record
export class CreateCdComponent {

  // our angular form
  create_cd_form: FormGroup;

  // @Output will tell the parent component (AppComponent) that an event happened in this component
  @Output() show_read_cds_event = new EventEmitter();

  // list of collections
  collection: Collections[];

  // initialize 'cd service', 'collection service' and 'form builder'
  constructor(
    private cdService: Service,
    private collectionService: CollectionService,
    formBuilder: FormBuilder
  ) {
    // based on our html form, build our angular form
    this.create_cd_form = formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      collection_id: ['', Validators.required]
    });
  }

  // user clicks 'create' button
  createCd() {

    // send data to server
    this.cdService.createCd(this.create_cd_form.value)
      .subscribe(
        cd => {
          // show an alert to tell the user if cd was created or not
          console.log(cd);

          // go back to list of cds
          this.readCds();
        },
        error => console.log(error)
      );
  }

  // user clicks the 'read cds' button
  readCds() {
    this.show_read_cds_event.emit({ title: 'Read Cds' });
  }

  // what to do when this component were initialized
  ngOnInit() {
    // read collections from database
    this.collectionService.readCollections()
      .subscribe(collections => this.collection = collections['records']);
      }
}
