import {Component, Output, EventEmitter, Injectable, OnInit, Input} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Service } from './Classes/service';
import { CollectionService } from './Classes/collectionservice';

import { Collections } from './Classes/collections';

@Component({
  selector: 'app-create-cd',
  templateUrl: './Html/create-cd.component.html',
  styleUrls: ['./Css/tablesAdds.css'],
  providers: [Service, CollectionService]
})

// component for creating a cd record
@Injectable()
export class CreateCdComponent implements  OnInit {

  // our angular form
  create_cd_form: FormGroup;

  // @Output will tell the parent component (AppComponent) that an event happened in this component
  @Output() show_read_cds_event = new EventEmitter();
  @Input() collection_id: any;

  // list of collections
  collection: Collections[];

  // initialize 'cd service', 'collection service' and 'form builder'
  constructor(
    private cdService: Service,
    private collectionService: CollectionService,
    formBuilder: FormBuilder
  ) {

    this.collectionService.readCollections ()
      .subscribe(Mycollections => this.collection = Mycollections);

    // based on our html form, build our angular form
    this.create_cd_form = formBuilder.group({
      Title: ['', Validators.required],
      Capacity: ['', Validators.required],
      DataUsage: ['', Validators.required],
      CollectionId: ['', Validators.required],
      Desribe: ['', Validators.required]
    });
    }

  // user clicks 'create' button
  createCd(): void {

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
    this.show_read_cds_event.emit({ title: 'Read Cds',
      collection_id: this.collection_id,
      });
  }

  // what to do when this component were initialized
  ngOnInit() {
    // read collections from database
  /*  console.log('Firstttttttttttt');
    this.collectionService.readCollections()
      .subscribe(Mycollections => this.collection = Mycollections);
    console.log(this.collection);*/
      }
}
