"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        // properties for child components
        this.title = 'Collections-Catálogo';
        this.show_read_collections_html = true;
        this.show_read_cds_html = false;
        this.show_create_cd_html = false;
        this.show_read_one_cd_html = false;
        this.show_update_cd_html = false;
        this.show_delete_cd_html = false;
        this.show_create_collections_html = false;
    }
    // show the 'create cd form'
    // show details of a product
    AppComponent.prototype.showReadOneCd = function ($event) {
        // set title and cd ID
        this.title = $event.title;
        this.cd_id = $event.cd_id;
        this.collection_id = $event.collection_id;
        // hide all html then show only one html
        this.hideAll_Html();
        this.show_read_one_cd_html = true;
    };
    AppComponent.prototype.showCreateCdEvent = function ($event) {
        this.title = $event.title;
        this.collection_id = $event.collection_id;
        // console.log( $event.title);
        this.show_read_cds_html = false;
        // hide all html then show only one html
        this.hideAll_Html();
        this.show_create_cd_html = true;
    };
    // Collections List
    AppComponent.prototype.showCollection = function ($event) {
        // set title
        this.title = $event.title;
        // hide all html then show only one html
        this.hideAll_Html();
        this.show_read_collections_html = true;
    };
    // show cds list
    AppComponent.prototype.showReadCds = function ($event) {
        // set title
        this.title = $event.title;
        this.collection_id = $event.collection_id;
        // hide all html then show only one html
        this.hideAll_Html();
        this.show_read_cds_html = true;
    };
    AppComponent.prototype.showUpdateCd = function ($event) {
        this.collection_id = $event.collection_id;
        // set title and cd ID
        this.title = $event.title;
        this.cd_id = $event.cd_id;
        // hide all html then show only one html
        this.hideAll_Html();
        this.show_update_cd_html = true;
    };
    // show 'are you sure?' prompt to confirm deletion of a record
    AppComponent.prototype.showDeleteCd = function ($event) {
        this.collection_id = $event.collection_id;
        // set title and cd ID
        this.title = $event.title;
        this.cd_id = $event.cd_id;
        // hide all html then show only one html
        this.hideAll_Html();
        this.show_delete_cd_html = true;
    };
    AppComponent.prototype.ShowCreateCollection = function ($event) {
        this.title = $event.title;
        this.hideAll_Html();
        this.show_create_collections_html = true;
    };
    // hide all html views
    AppComponent.prototype.hideAll_Html = function () {
        this.show_read_cds_html = false;
        this.show_read_one_cd_html = false;
        this.show_create_cd_html = false;
        this.show_update_cd_html = false;
        this.show_delete_cd_html = false;
        this.show_read_collections_html = false;
        this.show_create_collections_html = false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styleUrls: ['./Css/tablesAdds.css'],
        templateUrl: './Html/app.component.html',
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map