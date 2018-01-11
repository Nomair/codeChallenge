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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
// import {useAnimation} from '@angular/core/src/animation/dsl';
var Service = (function () {
    // We need Http to talk to a remote server.
    function Service(_http) {
        this._http = _http;
    }
    // Get list of cds from remote server.
    Service.prototype.readCds = function (collection_id) {
        return this._http
            .get('http://localhost:8000/api/cds/' + collection_id)
            .map(function (res) { return res.json(); });
    };
    // Get list of collection name from remote server.
    Service.prototype.readCollectionName = function (collection_id) {
        return this._http
            .get('http://localhost:8000/api/collectionName/' + collection_id)
            .map(function (res) { return res.json(); });
    };
    // Send cd data to remote server to create it.
    Service.prototype.createCd = function (cd) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post('http://localhost:8000/api/createcd', cd, options).map(function (res) { return res.json(); });
    };
    // Get a cd details from remote server.
    Service.prototype.readOneCd = function (cd_id) {
        return this._http
            .get('http://localhost:8000/api/read_one_cd/' + cd_id)
            .map(function (res) { return res.json(); });
    };
    Service.prototype.updateCd = function (cd) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log('herein the service');
        console.log(cd);
        return this._http.post('http://localhost:8000/api/updatecd', cd, options).map(function (res) { return res.json(); });
    };
    // Send cf ID to remote server to delete it.
    Service.prototype.deleteCd = function (cd_id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post('http://localhost:8000/api/deletecd', { id: cd_id }, options).map(function (res) { return res.json(); });
    };
    Service.prototype.readCdsCount = function (collection_id) {
        return this._http
            .get('http://localhost:8000/api/count_cds/' + collection_id)
            .map(function (res) { return res.json(); });
    };
    return Service;
}());
Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Service);
exports.Service = Service;
//# sourceMappingURL=service.js.map