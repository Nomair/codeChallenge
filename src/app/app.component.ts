import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./Css/tablesAdds.css'],
  templateUrl: './Html/app.component.html',
})
export class AppComponent  {

  // properties for child components
  title = 'Collections-Catálogo';
  cd_id: any;
  collection_id: any;

  show_read_collections_html = true;
  show_read_cds_html = false;
  show_create_cd_html = false;
  show_read_one_cd_html = false;
  show_update_cd_html = false;
  show_delete_cd_html = false;
  show_create_collections_html = false;


// show the 'create cd form'
// show details of a product
  showReadOneCd($event: any) {
    // set title and cd ID
    this.title = $event.title;
    this.cd_id = $event.cd_id;
    this.collection_id = $event.collection_id;
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_read_one_cd_html = true;
  }
  showCreateCdEvent($event: any) {
      this.title = $event.title;
    this.collection_id = $event.collection_id;
     // console.log( $event.title);

      this.show_read_cds_html = false;
      // hide all html then show only one html
      this.hideAll_Html();
      this.show_create_cd_html = true;
    }
    // Collections List
  showCollection( $event: any ) {
    // set title
    this.title = $event.title;
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_read_collections_html = true;
  }
// show cds list
  showReadCds( $event: any ) {
    // set title
    this.title = $event.title;
    this.collection_id = $event.collection_id;
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_read_cds_html = true;
  }
  showUpdateCd($event: any) {
    this.collection_id = $event.collection_id;
    // set title and cd ID
    this.title = $event.title;
    this.cd_id = $event.cd_id;
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_update_cd_html = true;
  }
  // show 'are you sure?' prompt to confirm deletion of a record
  showDeleteCd($event: any) {
    this.collection_id = $event.collection_id;
    // set title and cd ID
    this.title = $event.title;
    this.cd_id = $event.cd_id;

    // hide all html then show only one html
    this.hideAll_Html();
    this.show_delete_cd_html = true;
  }
      ShowCreateCollection($event: any) {
      this.title = $event.title;
      this.hideAll_Html();
      this.show_create_collections_html = true;
  }
// hide all html views
  hideAll_Html() {
    this.show_read_cds_html = false;
    this.show_read_one_cd_html = false;
    this.show_create_cd_html = false;
    this.show_update_cd_html = false;
    this.show_delete_cd_html = false;
    this.show_read_collections_html = false;
    this.show_create_collections_html = false;
  }
}
