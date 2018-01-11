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
var collectionservice_1 = require("./Classes/collectionservice");
var core_2 = require("@angular/core");
require("rxjs/add/operator/map");
/*
    * Needed to notify the 'consumer of this component', which is the 'AppComponent',
      that an 'event' happened in this component.
*/
var ReadCollectionsComponent = (function () {
    function ReadCollectionsComponent(service) {
        this.service = service;
        /*
          * Needed to notify the 'consumer of this component', which is the 'AppComponent',
            that an 'event' happened in this component.
      */
        this.show_create_collection_event = new core_1.EventEmitter();
        this.show_read_cds_event = new core_1.EventEmitter();
    }
    // store list of collections
    // initialize collectionService to retrieve list collections in the ngOnInit()
    // methods that we will use later
    ReadCollectionsComponent.prototype.createMyCollection = function () {
        // tell the parent component (AppComponent)
        this.show_create_collection_event.emit({
            title: 'Crio/Create Collection'
        });
    };
    ReadCollectionsComponent.prototype.readCdsBtn = function (id) {
        // tell the parent component (AppComponent)
        this.show_read_cds_event.emit({
            collection_id: id,
            title: 'Discos-Discs'
        });
    };
    // Collections-Catálogo from API.
    ReadCollectionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.readCollections()
            .subscribe(function (collections) {
            _this.collections = collections;
        });
    };
    return ReadCollectionsComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ReadCollectionsComponent.prototype, "show_create_collection_event", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ReadCollectionsComponent.prototype, "show_read_cds_event", void 0);
ReadCollectionsComponent = __decorate([
    core_1.Component({
        selector: 'app-read-collections',
        templateUrl: './Html/read-collections.component.html',
        styleUrls: ['./Css/tablesAdds.css'],
        providers: [collectionservice_1.CollectionService]
    }),
    core_2.Injectable(),
    __metadata("design:paramtypes", [collectionservice_1.CollectionService])
], ReadCollectionsComponent);
exports.ReadCollectionsComponent = ReadCollectionsComponent;
//# sourceMappingURL=read-collections.component.js.map