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
var ReadOneCdComponent = (function () {
    // initialize cd service
    function ReadOneCdComponent(cdService) {
        this.cdService = cdService;
        /*
            @Output will tell the parent component (AppComponent)
            that an event has happened (via .emit(), see readCds() method below)
        */
        this.show_read_cds_event = new core_1.EventEmitter();
    }
    // user clicks the 'read cds' button
    ReadOneCdComponent.prototype.readCds = function (collection_id) {
        this.show_read_cds_event.emit({ title: 'Discos-Discs',
            collection_id: collection_id });
    };
    // call the record when 'cd_id' was changed
    ReadOneCdComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.cdService.readOneCd(this.cd_id)
            .subscribe(function (cd) {
            _this.ReadOnecd = cd;
        });
    };
    return ReadOneCdComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ReadOneCdComponent.prototype, "show_read_cds_event", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ReadOneCdComponent.prototype, "cd_id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ReadOneCdComponent.prototype, "collection_id", void 0);
ReadOneCdComponent = __decorate([
    core_1.Component({
        selector: 'app-read-one-cd',
        templateUrl: './Html/read-one-cd.component.html',
        styleUrls: ['./Css/tablesAdds.css'],
        providers: [service_1.Service]
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [service_1.Service])
], ReadOneCdComponent);
exports.ReadOneCdComponent = ReadOneCdComponent;
//# sourceMappingURL=read-one-cd.component.js.map