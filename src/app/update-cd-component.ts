import {Component, OnChanges, Input, Output, EventEmitter, Injectable} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Service } from './Classes/service';
import { CollectionService } from './Classes/collectionservice';
import { Observable } from 'rxjs/Observable';
import { Collections } from './Classes/collections';
import {Cd} from './Classes/cd';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-update-cd',
  templateUrl: './Html/update-cd.component.html',
 // styleUrls: ['./update-cd.component.css'],
  providers: [Service, CollectionService]
})
@Injectable()
export class UpdateCdComponent implements OnChanges {
  collections: Collections[];
  // our angular form
  update_cd_form: FormGroup;

  @Output() show_read_cds_event = new EventEmitter();
  @Input() cd_id: any;
  @Input() collection_id: any;
  cd: Cd;
  categories: Collections[];

  // initialize cd & category services
  constructor(
    private cdService: Service,
    private collectionService: CollectionService,
    private formBuilder: FormBuilder
  ) {

    // build angular form
    this.update_cd_form = this.formBuilder.group({
      Title: ['', Validators.required],
      Capacity: ['', Validators.required],
      DataUsage: ['', Validators.required],
      CollectionId: ['', Validators.required],
      Desribe: ['', Validators.required]
    });
  }

  // user clicks 'create' button
  updateCd(form: NgForm) {

    // add cd_id in the object so it can be updated
    this.update_cd_form.value.id = this.cd_id;

    // send data to server
    this.cdService.updateCd(this.update_cd_form.value)
      .subscribe(
        cd => {
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

  // call the record when 'cd_id' was changed
  ngOnChanges() {

    // read one cd record
    this.cdService.readOneCd(this.cd_id)
      .subscribe(cd => {

        // put values in the form
        this.update_cd_form.patchValue({
          Title: cd.Title,
          Capacity: cd.Capacity,
          DataUsage: cd.DataUsage,
          CollectionId: cd.CollectionId,
          Desribe: cd.Desribe
        });
      });
  }
  // read collections from database
  ngOnInit() {
    this.collectionService.readCollections()
      .subscribe(collections => this.collections = collections);
  }
}