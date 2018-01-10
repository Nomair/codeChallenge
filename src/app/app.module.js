"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var service_1 = require("./Classes/service");
var collectionservice_1 = require("./Classes/collectionservice");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var read_collections_component_1 = require("./read-collections.component");
var read_cds_component_1 = require("./read-cds.component");
var create_cd_component_1 = require("./create-cd.component");
var read_one_cd_component_1 = require("./read-one-cd.component");
var update_cd_component_1 = require("./update-cd-component");
var delete_cd_component_1 = require("./delete-cd.component");
var create_collection_component_1 = require("./create-collection.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        providers: [service_1.Service, collectionservice_1.CollectionService, platform_browser_1.BrowserModule],
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, forms_1.ReactiveFormsModule],
        declarations: [app_component_1.AppComponent, read_cds_component_1.ReadCdsComponent, create_cd_component_1.CreateCdComponent, read_one_cd_component_1.ReadOneCdComponent, update_cd_component_1.UpdateCdComponent, delete_cd_component_1.DeleteCdComponent, read_collections_component_1.ReadCollectionsComponent, create_collection_component_1.CreateCollectionComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map