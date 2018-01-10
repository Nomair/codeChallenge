import {Component, OnInit, Input, Output, OnChanges, EventEmitter, Injectable} from '@angular/core';
import { Service } from './Classes/service';
import { Observable } from 'rxjs/Observable';
import { Cd } from './Classes/cd';

@Component({
  selector: 'app-read-one-cd',
  templateUrl: './Html/read-one-cd.component.html',
  // styleUrls: ['./read-one-cd.component.css'],
  providers: [Service]
})
@Injectable()
export class ReadOneCdComponent implements OnChanges {

  /*
      @Output will tell the parent component (AppComponent)
      that an event has happened (via .emit(), see readCds() method below)
  */
  @Output() show_read_cds_event = new EventEmitter();

  // @Input means it will accept value from parent component (AppComponent)
  @Input() cd_id: any;
  @Input() collection_id: any;

  ReadOnecd: Cd;

  // initialize cd service
  constructor(private cdService: Service) {}

  // user clicks the 'read cds' button
  readCds(collection_id: any) {
    this.show_read_cds_event.emit({ title: 'Read Cds',
      collection_id: collection_id});
  }

  // call the record when 'cd_id' was changed
  ngOnChanges() {
    this.cdService.readOneCd(this.cd_id)
      .subscribe(cd => { this.ReadOnecd = cd;
      });
  }

}
