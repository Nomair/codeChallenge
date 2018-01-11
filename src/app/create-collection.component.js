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
var collectionservice_1 = require("./Classes/collectionservice");
var CreateCollectionComponent = (function () {
    // initialize 'cd service', 'collection service' and 'form builder'
    function CreateCollectionComponent(collectionService, formBuilder) {
        this.collectionService = collectionService;
        // @Output will tell the parent component (AppComponent) that an event happened in this component
        this.show_read_collections_event = new core_1.EventEmitter();
        // based on our html form, build our angular form
        this.create_collection_form = formBuilder.group({
            NAME: ['', forms_1.Validators.required],
            Desribe: ['', forms_1.Validators.required],
        });
    }
    CreateCollectionComponent.prototype.readCollectionss = function () {
        this.show_read_collections_event.emit({ title: 'Collections-Catálogo' });
    };
    // user clicks 'create' button
    CreateCollectionComponent.prototype.createCollection = function () {
        var _this = this;
        // send data to server
        this.collectionService.createCollection(this.create_collection_form.value)
            .subscribe(function (collection) {
            // show an alert to tell the user if collection was created or not
            console.log(collection);
            // go back to list of cds
            _this.readCollections();
        }, function (error) { return console.log(error); });
    };
    // user clicks the 'read cds' button
    CreateCollectionComponent.prototype.readCollections = function () {
        this.show_read_collections_event.emit({ title: 'Crio/Create Collection',
        });
    };
    // what to do when this component were initialized
    CreateCollectionComponent.prototype.ngOnInit = function () {
    };
    return CreateCollectionComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CreateCollectionComponent.prototype, "show_read_collections_event", void 0);
CreateCollectionComponent = __decorate([
    core_1.Component({
        selector: 'app-create-collection',
        templateUrl: './Html/create-collection.component.html',
        styleUrls: ['./Css/tablesAdds.css'],
        providers: [collectionservice_1.CollectionService]
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [collectionservice_1.CollectionService,
        forms_1.FormBuilder])
], CreateCollectionComponent);
exports.CreateCollectionComponent = CreateCollectionComponent;
//# sourceMappingURL=create-collection.component.js.map