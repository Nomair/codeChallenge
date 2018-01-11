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
var CreateCdComponent = (function () {
    // initialize 'cd service', 'collection service' and 'form builder'
    function CreateCdComponent(cdService, collectionService, formBuilder) {
        var _this = this;
        this.cdService = cdService;
        this.collectionService = collectionService;
        // @Output will tell the parent component (AppComponent) that an event happened in this component
        this.show_read_cds_event = new core_1.EventEmitter();
        this.collectionService.readCollections()
            .subscribe(function (Mycollections) { return _this.collection = Mycollections; });
        // based on our html form, build our angular form
        this.create_cd_form = formBuilder.group({
            Title: ['', forms_1.Validators.required],
            Capacity: ['', forms_1.Validators.required],
            DataUsage: ['', forms_1.Validators.required],
            CollectionId: ['', forms_1.Validators.required],
            Desribe: ['', forms_1.Validators.required]
        });
    }
    // user clicks 'create' button
    CreateCdComponent.prototype.createCd = function () {
        var _this = this;
        // send data to server
        this.cdService.createCd(this.create_cd_form.value)
            .subscribe(function (cd) {
            // show an alert to tell the user if cd was created or not
            console.log(cd);
            // go back to list of cds
            _this.readCds();
        }, function (error) { return console.log(error); });
    };
    // user clicks the 'read cds' button
    CreateCdComponent.prototype.readCds = function () {
        this.show_read_cds_event.emit({ title: 'Read Cds',
            collection_id: this.collection_id,
        });
    };
    // what to do when this component were initialized
    CreateCdComponent.prototype.ngOnInit = function () {
        this.create_cd_form.patchValue({ CollectionId: this.collection_id });
        // read collections from database
    };
    return CreateCdComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CreateCdComponent.prototype, "show_read_cds_event", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CreateCdComponent.prototype, "collection_id", void 0);
CreateCdComponent = __decorate([
    core_1.Component({
        selector: 'app-create-cd',
        templateUrl: './Html/create-cd.component.html',
        styleUrls: ['./Css/tablesAdds.css'],
        providers: [service_1.Service, collectionservice_1.CollectionService]
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [service_1.Service,
        collectionservice_1.CollectionService,
        forms_1.FormBuilder])
], CreateCdComponent);
exports.CreateCdComponent = CreateCdComponent;
//# sourceMappingURL=create-cd.component.js.map