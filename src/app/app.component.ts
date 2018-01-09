import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './Html/app.component.html',
})
export class AppComponent  {

  // properties for child components
  title = 'Read Cds';
  cd_id: any;

  show_read_cds_html = true;
  show_create_cd_html = false;
  show_read_one_cd_html = false;
  show_update_cd_html = false;
  show_delete_cd_html = false;
// show the 'create cd form'

  showCreateCdEvent($event: any) {
      this.title = $event.title;
     // console.log( $event.title);

      this.show_read_cds_html = false;
      // hide all html then show only one html
      this.hideAll_Html();
      this.show_create_cd_html = true;
    }

// show cds list
  showReadCds( $event: any ) {
    // set title
    this.title = $event.title;

    // hide all html then show only one html
    this.hideAll_Html();
    this.show_read_cds_html = true;
  }

// hide all html views
  hideAll_Html() {
    this.show_read_cds_html = false;
    this.show_read_one_cd_html = false;
    this.show_create_cd_html = false;
    this.show_update_cd_html = false;
    this.show_delete_cd_html = false;
  }
}
