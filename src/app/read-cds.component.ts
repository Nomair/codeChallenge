import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Service } from './Classes/service';
import { Cd } from './Classes/cd';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
    * Needed to notify the 'consumer of this component', which is the 'AppComponent',
      that an 'event' happened in this component.
*/


@Component({
  selector: 'app-read-cds',
  templateUrl: './Html/read-cds.component.html',
  // styleUrls: ['./read-cds.component.css'],
  providers: [Service]
})

@Injectable()
export class ReadCdsComponent implements OnInit {
  /*
    * Needed to notify the 'consumer of this component', which is the 'AppComponent',
      that an 'event' happened in this component.
*/
  @Output() show_create_cd_event  = new EventEmitter();
  @Output() show_read_one_cd_event = new EventEmitter();
  @Output() show_update_cd_event = new EventEmitter();
  @Output() show_delete_cd_event = new EventEmitter();

  constructor(private service: Service) {}
  cds: Cd[];
  // store list of cds
  // initialize cdService to retrieve list cds in the ngOnInit()

  // methods that we will use later
  createMyCd(): void {
    // tell the parent component (AppComponent)
    this.show_create_cd_event.emit({
      title: 'Create Product'
    });
  }
  readOneCd( id: any ) {
    this.constructor();
    console.log('rp comp readOnecd');
    // tell the parent component (AppComponent)
    this.show_read_one_cd_event.emit({
      cd_id: id,
      title: 'Read One Cd'
    });
  }
  updateCd() {}
  deletePCd( ) {}
  // Read Cds from API.
  ngOnInit() {
    this.service.readCds()
      .subscribe( cds =>
        this.cds = cds
      );

  }
}



