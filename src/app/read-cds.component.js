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
var core_2 = require("@angular/core");
require("rxjs/add/operator/map");
/*
    * Needed to notify the 'consumer of this component', which is the 'AppComponent',
      that an 'event' happened in this component.
*/
var ReadCdsComponent = (function () {
    function ReadCdsComponent(service) {
        this.service = service;
        /*
          * Needed to notify the 'consumer of this component', which is the 'AppComponent',
            that an 'event' happened in this component.
      */
        this.show_create_cd_event = new core_1.EventEmitter();
        this.show_read_one_cd_event = new core_1.EventEmitter();
        this.show_update_cd_event = new core_1.EventEmitter();
        this.show_delete_cd_event = new core_1.EventEmitter();
        this.show_read_collections_html = new core_1.EventEmitter();
    }
    // store list of cds
    // initialize cdService to retrieve list cds in the ngOnInit()
    // methods that we will use later
    ReadCdsComponent.prototype.createMyCd = function () {
        // tell the parent component (AppComponent)
        this.show_create_cd_event.emit({
            collection_id: this.collection_id,
            title: 'Crio/Create Disc'
        });
    };
    ReadCdsComponent.prototype.ShowCollections = function () {
        // tell the parent component (AppComponent)
        this.show_read_collections_html.emit({
            title: 'Collections-Catálogo'
        });
    };
    ReadCdsComponent.prototype.readOneCdBtn = function (id, collection_id) {
        // tell the parent component (AppComponent)
        this.show_read_one_cd_event.emit({
            cd_id: id,
            collection_id: collection_id,
            title: 'Disco-Disc'
        });
    };
    ReadCdsComponent.prototype.updateCd = function (id, collection_id) {
        // tell the parent component (AppComponent)
        this.show_update_cd_event.emit({
            cd_id: id,
            collection_id: collection_id,
            title: 'Edit-Editar'
        });
    };
    ReadCdsComponent.prototype.deleteCd = function (id, collection_id) {
        // when user clicks the 'delete' button
        // tell the parent component (AppComponent)
        this.show_delete_cd_event.emit({
            cd_id: id,
            collection_id: collection_id,
            title: 'Delete/Eliminar'
        });
    };
    // Read Cds from API.
    ReadCdsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.readCds(this.collection_id)
            .subscribe(function (cds) {
            return _this.cds = cds;
        });
    };
    return ReadCdsComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ReadCdsComponent.prototype, "show_create_cd_event", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ReadCdsComponent.prototype, "show_read_one_cd_event", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ReadCdsComponent.prototype, "show_update_cd_event", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ReadCdsComponent.prototype, "show_delete_cd_event", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ReadCdsComponent.prototype, "show_read_collections_html", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ReadCdsComponent.prototype, "collection_id", void 0);
ReadCdsComponent = __decorate([
    core_1.Component({
        selector: 'app-read-cds',
        templateUrl: './Html/read-cds.component.html',
        styleUrls: ['./Css/tablesAdds.css'],
        providers: [service_1.Service]
    }),
    core_2.Injectable(),
    __metadata("design:paramtypes", [service_1.Service])
], ReadCdsComponent);
exports.ReadCdsComponent = ReadCdsComponent;
//# sourceMappingURL=read-cds.component.js.map