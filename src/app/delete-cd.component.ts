import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Service } from './Classes/service';

@Component({
  selector: 'app-delete-cd',
  templateUrl: './Html/delete-cd.component.html',
  // styleUrls: ['./delete-cd.component.css'],
  providers: [Service]
})

export class DeleteCdComponent {

  /*
      @Output will tell the parent component (AppComponent)
      that an event has happened (via .emit(), see readCds() method below)
  */
  @Output() show_read_cds_event = new EventEmitter();

  // @Input enable getting the cd_id from parent component (AppComponent)
  @Input() cd_id: any;
  @Input() collection_id: any;
  // initialize cd service
  constructor(private cdService: Service) {}

  // user clicks 'yes' button
  deleteCd() {

    // delete data from database
    this.cdService.deleteCd(this.cd_id)
      .subscribe(
        cd => {

          // show an alert to tell the user if vdq was created or not
          console.log(cd);

          // go back to list of cds
          this.readCds();
        },
        error => console.log(error)
      );
  }

  // user clicks the 'read cds' button
  readCds() {
    this.show_read_cds_event.emit({ title: 'Discos-Discs' ,
      collection_id: this.collection_id}
      );
  }

}
