import {Component} from '@angular/core';
import { Service } from './Classes/service';
@Component({
  selector: 'my-app',
  styleUrls: ['./Css/tablesAdds.css'],
  templateUrl: './Html/app.component.html',
  providers: [Service]
})
export class AppComponent  {
  constructor(private service: Service ) { }
  // properties for child components
  title = 'Collections-Catálogo';
  helloMessage = 'Welcome to the Discs Library';
  cd_id: any;
  collection_id: any;
  show_read_collections_html = true;
  show_read_cds_html = false;
  show_create_cd_html = false;
  show_read_one_cd_html = false;
  show_update_cd_html = false;
  show_delete_cd_html = false;
  show_create_collections_html = false;
// show details of a cd
  showReadOneCd($event: any) {
    // set title and cd ID
    this.title = $event.title;
    this.helloMessage = '';
    this.cd_id = $event.cd_id;
    this.collection_id = $event.collection_id;
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_read_one_cd_html = true;
  }
  // show the 'create cd form'
  showCreateCdEvent($event: any) {
    this.helloMessage = '';
    this.title = $event.title;
    this.collection_id = $event.collection_id;
    this.show_read_cds_html = false;
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_create_cd_html = true;
    }
    // Collections List
  showCollection( $event: any ) {
    // set title
    this.helloMessage= 'Welcome to the Discs Library';
    this.title = $event.title;
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_read_collections_html = true;
  }

// show cds list
  showReadCds( $event: any ) {
    // this.title = $event.title;
    try {
      this.helloMessage= '';
      this.service.readCollectionName($event.collection_id)
      .subscribe( collections => {
        this.title =  JSON.parse(JSON.stringify(collections))[0]['NAME'] + ' Collection';
      });
    this.service.readCdsCount($event.collection_id)
      .subscribe( cdsCOunt => {
        this.helloMessage =  'Discs Count: ' + JSON.parse(JSON.stringify(cdsCOunt))[0]['count'];
      });
    }catch (err) {
      // handle the error safely
      console.log(err);
    }
    // set title
   // this.title = $event.title;
    this.collection_id = $event.collection_id;
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_read_cds_html = true;
  }
  showUpdateCd($event: any) {
    this.helloMessage = '';
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
    this.helloMessage = '';
    this.collection_id = $event.collection_id;
    // set title and cd ID
    this.title = $event.title;
    this.cd_id = $event.cd_id;

    // hide all html then show only one html
    this.hideAll_Html();
    this.show_delete_cd_html = true;
  }
      ShowCreateCollection($event: any) {
        this.helloMessage = '';
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
