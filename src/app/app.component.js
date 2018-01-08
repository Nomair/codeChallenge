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
        this.title = 'Read Products';
        this.show_read_products_html = true;
        this.show_create_product_html = false;
        this.show_read_one_product_html = false;
        this.show_update_product_html = false;
        this.show_delete_product_html = false;
    }
    // show the 'create product form'
    AppComponent.prototype.showCreateProduct = function () {
        console.log('herrrrrrrrrrrrrrrrrrrrrrrr');
        // set title
        //  this.title = $event.title;
        // hide all html then show only one html
        this.hideAll_Html();
        this.show_create_product_html = true;
    };
    // show products list
    AppComponent.prototype.showReadProducts = function ($event) {
        // set title
        this.title = $event.title;
        // hide all html then show only one html
        this.hideAll_Html();
        this.show_read_products_html = true;
    };
    // hide all html views
    AppComponent.prototype.hideAll_Html = function () {
        this.show_read_products_html = false;
        this.show_read_one_product_html = false;
        this.show_create_product_html = false;
        this.show_update_product_html = false;
        this.show_delete_product_html = false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './Html/app.component.html',
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map