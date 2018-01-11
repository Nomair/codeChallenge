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
var DeleteCdComponent = (function () {
    // initialize cd service
    function DeleteCdComponent(cdService) {
        this.cdService = cdService;
        /*
            @Output will tell the parent component (AppComponent)
            that an event has happened (via .emit(), see readCds() method below)
        */
        this.show_read_cds_event = new core_1.EventEmitter();
    }
    // user clicks 'yes' button
    DeleteCdComponent.prototype.deleteCd = function () {
        var _this = this;
        // delete data from database
        this.cdService.deleteCd(this.cd_id)
            .subscribe(function (cd) {
            // show an alert to tell the user if vdq was created or not
            console.log(cd);
            // go back to list of cds
            _this.readCds();
        }, function (error) { return console.log(error); });
    };
    // user clicks the 'read cds' button
    DeleteCdComponent.prototype.readCds = function () {
        this.show_read_cds_event.emit({ title: 'Discos-Discs',
            collection_id: this.collection_id });
    };
    return DeleteCdComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DeleteCdComponent.prototype, "show_read_cds_event", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DeleteCdComponent.prototype, "cd_id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DeleteCdComponent.prototype, "collection_id", void 0);
DeleteCdComponent = __decorate([
    core_1.Component({
        selector: 'app-delete-cd',
        templateUrl: './Html/delete-cd.component.html',
        // styleUrls: ['./delete-cd.component.css'],
        providers: [service_1.Service]
    }),
    __metadata("design:paramtypes", [service_1.Service])
], DeleteCdComponent);
exports.DeleteCdComponent = DeleteCdComponent;
//# sourceMappingURL=delete-cd.component.js.map