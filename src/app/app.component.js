"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var service_1 = require("./Classes/service");
var AppComponent = (function () {
    function AppComponent(service) {
        this.service = service;
        // properties for child components
        this.title = 'Collections-Catálogo';
        this.helloMessage = 'Welcome to the Discs Library';
        this.show_read_collections_html = true;
        this.show_read_cds_html = false;
        this.show_create_cd_html = false;
        this.show_read_one_cd_html = false;
        this.show_update_cd_html = false;
        this.show_delete_cd_html = false;
        this.show_create_collections_html = false;
    }
    // show details of a product
    AppComponent.prototype.showReadOneCd = function ($event) {
        // set title and cd ID
        this.title = $event.title;
        this.helloMessage = '';
        this.cd_id = $event.cd_id;
        this.collection_id = $event.collection_id;
        // hide all html then show only one html
        this.hideAll_Html();
        this.show_read_one_cd_html = true;
    };
    // show the 'create cd form'
    AppComponent.prototype.showCreateCdEvent = function ($event) {
        this.helloMessage = '';
        this.title = $event.title;
        this.collection_id = $event.collection_id;
        this.show_read_cds_html = false;
        // hide all html then show only one html
        this.hideAll_Html();
        this.show_create_cd_html = true;
    };
    // Collections List
    AppComponent.prototype.showCollection = function ($event) {
        // set title
        this.helloMessage = 'Welcome to the Discs Library';
        this.title = $event.title;
        // hide all html then show only one html
        this.hideAll_Html();
        this.show_read_collections_html = true;
    };
    // show cds list
    AppComponent.prototype.showReadCds = function ($event) {
        var _this = this;
        // this.title = $event.title;
        try {
            this.helloMessage = '';
            this.service.readCollectionName($event.collection_id)
                .subscribe(function (collections) {
                _this.title = JSON.parse(JSON.stringify(collections))[0]['NAME'] + ' Collection';
            });
            this.service.readCdsCount($event.collection_id)
                .subscribe(function (cdsCOunt) {
                _this.helloMessage = 'Discs Count: ' + JSON.parse(JSON.stringify(cdsCOunt))[0]['count'];
            });
        }
        catch (err) {
            // handle the error safely
            console.log(err);
        }
        // set title
        // this.title = $event.title;
        this.collection_id = $event.collection_id;
        // hide all html then show only one html
        this.hideAll_Html();
        this.show_read_cds_html = true;
    };
    AppComponent.prototype.showUpdateCd = function ($event) {
        this.helloMessage = '';
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
        this.helloMessage = '';
        this.collection_id = $event.collection_id;
        // set title and cd ID
        this.title = $event.title;
        this.cd_id = $event.cd_id;
        // hide all html then show only one html
        this.hideAll_Html();
        this.show_delete_cd_html = true;
    };
    AppComponent.prototype.ShowCreateCollection = function ($event) {
        this.helloMessage = '';
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
        providers: [service_1.Service]
    }),
    __metadata("design:paramtypes", [service_1.Service])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map