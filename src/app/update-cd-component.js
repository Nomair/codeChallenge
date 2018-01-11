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
var forms_1 = require("@angular/forms");
var service_1 = require("./Classes/service");
var collectionservice_1 = require("./Classes/collectionservice");
var UpdateCdComponent = (function () {
    // initialize cd & collections services
    function UpdateCdComponent(cdService, collectionService, formBuilder) {
        this.cdService = cdService;
        this.collectionService = collectionService;
        this.formBuilder = formBuilder;
        this.show_read_cds_event = new core_1.EventEmitter();
        // build angular form
        this.update_cd_form = this.formBuilder.group({
            Title: ['', forms_1.Validators.required],
            Capacity: ['', forms_1.Validators.required],
            DataUsage: ['', forms_1.Validators.required],
            CollectionId: ['', forms_1.Validators.required],
            Desribe: ['', forms_1.Validators.required]
        });
    }
    // user clicks 'create' button
    UpdateCdComponent.prototype.updateCd = function (form) {
        var _this = this;
        // add cd_id in the object so it can be updated
        this.update_cd_form.value.id = this.cd_id;
        // send data to server
        this.cdService.updateCd(this.update_cd_form.value)
            .subscribe(function (cd) {
            // go back to list of cds
            _this.readCds();
        }, function (error) { return console.log(error); });
    };
    // user clicks the 'read cds' button
    UpdateCdComponent.prototype.readCds = function () {
        this.show_read_cds_event.emit({ title: 'Discos-Discs',
            collection_id: this.collection_id,
        });
    };
    // call the record when 'cd_id' was changed
    UpdateCdComponent.prototype.ngOnChanges = function () {
        // read one cd record
    };
    // read collections from database
    UpdateCdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cdService.readOneCd(this.cd_id)
            .subscribe(function (cd) {
            _this.update_cd_form.patchValue({
                Title: JSON.parse(JSON.stringify(cd))[0]['Title'],
                Capacity: JSON.parse(JSON.stringify(cd))[0]['Capacity'],
                DataUsage: JSON.parse(JSON.stringify(cd))[0]['DataUsage'],
                CollectionId: JSON.parse(JSON.stringify(cd))[0]['CollectionId'],
                Desribe: JSON.parse(JSON.stringify(cd))[0]['Desribe']
            });
            console.log(_this.update_cd_form);
        });
        this.collectionService.readCollections()
            .subscribe(function (collections) { return _this.collections = collections; });
    };
    return UpdateCdComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UpdateCdComponent.prototype, "show_read_cds_event", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UpdateCdComponent.prototype, "cd_id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UpdateCdComponent.prototype, "collection_id", void 0);
UpdateCdComponent = __decorate([
    core_1.Component({
        selector: 'app-update-cd',
        templateUrl: './Html/update-cd.component.html',
        styleUrls: ['./Css/tablesAdds.css'],
        providers: [service_1.Service, collectionservice_1.CollectionService]
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [service_1.Service,
        collectionservice_1.CollectionService,
        forms_1.FormBuilder])
], UpdateCdComponent);
exports.UpdateCdComponent = UpdateCdComponent;
//# sourceMappingURL=update-cd-component.js.map