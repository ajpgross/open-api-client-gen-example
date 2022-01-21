(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('@ajpgross/petstore-client', ['exports', '@angular/core', '@angular/common/http'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ajpgross = global.ajpgross || {}, global.ajpgross["petstore-client"] = {}), global.ng.core, global.ng.common.http));
})(this, (function (exports, i0, i1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    /**
     * Custom HttpParameterCodec
     * Workaround for https://github.com/angular/angular/issues/18261
     */
    var CustomHttpParameterCodec = /** @class */ (function () {
        function CustomHttpParameterCodec() {
        }
        CustomHttpParameterCodec.prototype.encodeKey = function (k) {
            return encodeURIComponent(k);
        };
        CustomHttpParameterCodec.prototype.encodeValue = function (v) {
            return encodeURIComponent(v);
        };
        CustomHttpParameterCodec.prototype.decodeKey = function (k) {
            return decodeURIComponent(k);
        };
        CustomHttpParameterCodec.prototype.decodeValue = function (v) {
            return decodeURIComponent(v);
        };
        return CustomHttpParameterCodec;
    }());

    var BASE_PATH = new i0.InjectionToken('basePath');
    var COLLECTION_FORMATS = {
        'csv': ',',
        'tsv': '   ',
        'ssv': ' ',
        'pipes': '|'
    };

    var Configuration = /** @class */ (function () {
        function Configuration(configurationParameters) {
            var _this = this;
            if (configurationParameters === void 0) { configurationParameters = {}; }
            this.apiKeys = configurationParameters.apiKeys;
            this.username = configurationParameters.username;
            this.password = configurationParameters.password;
            this.accessToken = configurationParameters.accessToken;
            this.basePath = configurationParameters.basePath;
            this.withCredentials = configurationParameters.withCredentials;
            this.encoder = configurationParameters.encoder;
            if (configurationParameters.credentials) {
                this.credentials = configurationParameters.credentials;
            }
            else {
                this.credentials = {};
            }
            // init default api_key credential
            if (!this.credentials['api_key']) {
                this.credentials['api_key'] = function () {
                    if (_this.apiKeys === null || _this.apiKeys === undefined) {
                        return undefined;
                    }
                    else {
                        return _this.apiKeys['api_key'] || _this.apiKeys['api_key'];
                    }
                };
            }
            // init default petstore_auth credential
            if (!this.credentials['petstore_auth']) {
                this.credentials['petstore_auth'] = function () {
                    return typeof _this.accessToken === 'function'
                        ? _this.accessToken()
                        : _this.accessToken;
                };
            }
        }
        /**
         * Select the correct content-type to use for a request.
         * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
         * If no content type is found return the first found type if the contentTypes is not empty
         * @param contentTypes - the array of content types that are available for selection
         * @returns the selected content-type or <code>undefined</code> if no selection could be made.
         */
        Configuration.prototype.selectHeaderContentType = function (contentTypes) {
            var _this = this;
            if (contentTypes.length === 0) {
                return undefined;
            }
            var type = contentTypes.find(function (x) { return _this.isJsonMime(x); });
            if (type === undefined) {
                return contentTypes[0];
            }
            return type;
        };
        /**
         * Select the correct accept content-type to use for a request.
         * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
         * If no content type is found return the first found type if the contentTypes is not empty
         * @param accepts - the array of content types that are available for selection.
         * @returns the selected content-type or <code>undefined</code> if no selection could be made.
         */
        Configuration.prototype.selectHeaderAccept = function (accepts) {
            var _this = this;
            if (accepts.length === 0) {
                return undefined;
            }
            var type = accepts.find(function (x) { return _this.isJsonMime(x); });
            if (type === undefined) {
                return accepts[0];
            }
            return type;
        };
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */
        Configuration.prototype.isJsonMime = function (mime) {
            var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
            return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        };
        Configuration.prototype.lookupCredential = function (key) {
            var value = this.credentials[key];
            return typeof value === 'function'
                ? value()
                : value;
        };
        return Configuration;
    }());

    /**
     * Swagger Petstore - OpenAPI 3.0
     * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we\'ve switched to the design first approach! You can now help us improve the API whether it\'s by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3.  Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore) - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
     *
     * The version of the OpenAPI document: 1.0.9
     * Contact: apiteam@swagger.io
     *
     * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
     * https://openapi-generator.tech
     * Do not edit the class manually.
     */
    var PetService = /** @class */ (function () {
        function PetService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://petstore3.swagger.io/api/v3';
            this.defaultHeaders = new i1.HttpHeaders();
            this.configuration = new Configuration();
            if (configuration) {
                this.configuration = configuration;
            }
            if (typeof this.configuration.basePath !== 'string') {
                if (typeof basePath !== 'string') {
                    basePath = this.basePath;
                }
                this.configuration.basePath = basePath;
            }
            this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
        }
        PetService.prototype.addToHttpParams = function (httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
                httpParams = this.addToHttpParamsRecursive(httpParams, value);
            }
            else {
                httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }
            return httpParams;
        };
        PetService.prototype.addToHttpParamsRecursive = function (httpParams, value, key) {
            var _this = this;
            if (value == null) {
                return httpParams;
            }
            if (typeof value === "object") {
                if (Array.isArray(value)) {
                    value.forEach(function (elem) { return httpParams = _this.addToHttpParamsRecursive(httpParams, elem, key); });
                }
                else if (value instanceof Date) {
                    if (key != null) {
                        httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                    }
                    else {
                        throw Error("key may not be null if value is Date");
                    }
                }
                else {
                    Object.keys(value).forEach(function (k) { return httpParams = _this.addToHttpParamsRecursive(httpParams, value[k], key != null ? key + "." + k : k); });
                }
            }
            else if (key != null) {
                httpParams = httpParams.append(key, value);
            }
            else {
                throw Error("key may not be null if value is not object or array");
            }
            return httpParams;
        };
        PetService.prototype.addPet = function (pet, observe, reportProgress, options) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (pet === null || pet === undefined) {
                throw new Error('Required parameter pet was null or undefined when calling addPet.');
            }
            var headers = this.defaultHeaders;
            var credential;
            // authentication (petstore_auth) required
            credential = this.configuration.lookupCredential('petstore_auth');
            if (credential) {
                headers = headers.set('Authorization', 'Bearer ' + credential);
            }
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;
            if (httpHeaderAcceptSelected === undefined) {
                // to determine the Accept header
                var httpHeaderAccepts = [
                    'application/xml',
                    'application/json'
                ];
                httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }
            if (httpHeaderAcceptSelected !== undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json',
                'application/xml',
                'application/x-www-form-urlencoded'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected !== undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            var responseType_ = 'json';
            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            return this.httpClient.post(this.configuration.basePath + "/pet", pet, {
                responseType: responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PetService.prototype.deletePet = function (petId, apiKey, observe, reportProgress, options) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (petId === null || petId === undefined) {
                throw new Error('Required parameter petId was null or undefined when calling deletePet.');
            }
            var headers = this.defaultHeaders;
            if (apiKey !== undefined && apiKey !== null) {
                headers = headers.set('api_key', String(apiKey));
            }
            var credential;
            // authentication (petstore_auth) required
            credential = this.configuration.lookupCredential('petstore_auth');
            if (credential) {
                headers = headers.set('Authorization', 'Bearer ' + credential);
            }
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;
            if (httpHeaderAcceptSelected === undefined) {
                // to determine the Accept header
                var httpHeaderAccepts = [];
                httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }
            if (httpHeaderAcceptSelected !== undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            var responseType_ = 'json';
            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            return this.httpClient.delete(this.configuration.basePath + "/pet/" + encodeURIComponent(String(petId)), {
                responseType: responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PetService.prototype.findPetsByStatus = function (status, observe, reportProgress, options) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new i1.HttpParams({ encoder: this.encoder });
            if (status !== undefined && status !== null) {
                queryParameters = this.addToHttpParams(queryParameters, status, 'status');
            }
            var headers = this.defaultHeaders;
            var credential;
            // authentication (petstore_auth) required
            credential = this.configuration.lookupCredential('petstore_auth');
            if (credential) {
                headers = headers.set('Authorization', 'Bearer ' + credential);
            }
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;
            if (httpHeaderAcceptSelected === undefined) {
                // to determine the Accept header
                var httpHeaderAccepts = [
                    'application/xml',
                    'application/json'
                ];
                httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }
            if (httpHeaderAcceptSelected !== undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            var responseType_ = 'json';
            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            return this.httpClient.get(this.configuration.basePath + "/pet/findByStatus", {
                params: queryParameters,
                responseType: responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PetService.prototype.findPetsByTags = function (tags, observe, reportProgress, options) {
            var _this = this;
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new i1.HttpParams({ encoder: this.encoder });
            if (tags) {
                tags.forEach(function (element) {
                    queryParameters = _this.addToHttpParams(queryParameters, element, 'tags');
                });
            }
            var headers = this.defaultHeaders;
            var credential;
            // authentication (petstore_auth) required
            credential = this.configuration.lookupCredential('petstore_auth');
            if (credential) {
                headers = headers.set('Authorization', 'Bearer ' + credential);
            }
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;
            if (httpHeaderAcceptSelected === undefined) {
                // to determine the Accept header
                var httpHeaderAccepts = [
                    'application/xml',
                    'application/json'
                ];
                httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }
            if (httpHeaderAcceptSelected !== undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            var responseType_ = 'json';
            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            return this.httpClient.get(this.configuration.basePath + "/pet/findByTags", {
                params: queryParameters,
                responseType: responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PetService.prototype.getPetById = function (petId, observe, reportProgress, options) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (petId === null || petId === undefined) {
                throw new Error('Required parameter petId was null or undefined when calling getPetById.');
            }
            var headers = this.defaultHeaders;
            var credential;
            // authentication (api_key) required
            credential = this.configuration.lookupCredential('api_key');
            if (credential) {
                headers = headers.set('api_key', credential);
            }
            // authentication (petstore_auth) required
            credential = this.configuration.lookupCredential('petstore_auth');
            if (credential) {
                headers = headers.set('Authorization', 'Bearer ' + credential);
            }
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;
            if (httpHeaderAcceptSelected === undefined) {
                // to determine the Accept header
                var httpHeaderAccepts = [
                    'application/xml',
                    'application/json'
                ];
                httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }
            if (httpHeaderAcceptSelected !== undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            var responseType_ = 'json';
            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            return this.httpClient.get(this.configuration.basePath + "/pet/" + encodeURIComponent(String(petId)), {
                responseType: responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PetService.prototype.updatePet = function (pet, observe, reportProgress, options) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (pet === null || pet === undefined) {
                throw new Error('Required parameter pet was null or undefined when calling updatePet.');
            }
            var headers = this.defaultHeaders;
            var credential;
            // authentication (petstore_auth) required
            credential = this.configuration.lookupCredential('petstore_auth');
            if (credential) {
                headers = headers.set('Authorization', 'Bearer ' + credential);
            }
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;
            if (httpHeaderAcceptSelected === undefined) {
                // to determine the Accept header
                var httpHeaderAccepts = [
                    'application/xml',
                    'application/json'
                ];
                httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }
            if (httpHeaderAcceptSelected !== undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json',
                'application/xml',
                'application/x-www-form-urlencoded'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected !== undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            var responseType_ = 'json';
            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            return this.httpClient.put(this.configuration.basePath + "/pet", pet, {
                responseType: responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PetService.prototype.updatePetWithForm = function (petId, name, status, observe, reportProgress, options) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (petId === null || petId === undefined) {
                throw new Error('Required parameter petId was null or undefined when calling updatePetWithForm.');
            }
            var queryParameters = new i1.HttpParams({ encoder: this.encoder });
            if (name !== undefined && name !== null) {
                queryParameters = this.addToHttpParams(queryParameters, name, 'name');
            }
            if (status !== undefined && status !== null) {
                queryParameters = this.addToHttpParams(queryParameters, status, 'status');
            }
            var headers = this.defaultHeaders;
            var credential;
            // authentication (petstore_auth) required
            credential = this.configuration.lookupCredential('petstore_auth');
            if (credential) {
                headers = headers.set('Authorization', 'Bearer ' + credential);
            }
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;
            if (httpHeaderAcceptSelected === undefined) {
                // to determine the Accept header
                var httpHeaderAccepts = [];
                httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }
            if (httpHeaderAcceptSelected !== undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            var responseType_ = 'json';
            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            return this.httpClient.post(this.configuration.basePath + "/pet/" + encodeURIComponent(String(petId)), null, {
                params: queryParameters,
                responseType: responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PetService.prototype.uploadFile = function (petId, additionalMetadata, body, observe, reportProgress, options) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (petId === null || petId === undefined) {
                throw new Error('Required parameter petId was null or undefined when calling uploadFile.');
            }
            var queryParameters = new i1.HttpParams({ encoder: this.encoder });
            if (additionalMetadata !== undefined && additionalMetadata !== null) {
                queryParameters = this.addToHttpParams(queryParameters, additionalMetadata, 'additionalMetadata');
            }
            var headers = this.defaultHeaders;
            var credential;
            // authentication (petstore_auth) required
            credential = this.configuration.lookupCredential('petstore_auth');
            if (credential) {
                headers = headers.set('Authorization', 'Bearer ' + credential);
            }
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;
            if (httpHeaderAcceptSelected === undefined) {
                // to determine the Accept header
                var httpHeaderAccepts = [
                    'application/json'
                ];
                httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }
            if (httpHeaderAcceptSelected !== undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/octet-stream'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected !== undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            var responseType_ = 'json';
            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            return this.httpClient.post(this.configuration.basePath + "/pet/" + encodeURIComponent(String(petId)) + "/uploadImage", body, {
                params: queryParameters,
                responseType: responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return PetService;
    }());
    PetService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function PetService_Factory() { return new PetService(i0__namespace.ɵɵinject(i1__namespace.HttpClient), i0__namespace.ɵɵinject(BASE_PATH, 8), i0__namespace.ɵɵinject(Configuration, 8)); }, token: PetService, providedIn: "root" });
    PetService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    PetService.ctorParameters = function () { return [
        { type: i1.HttpClient },
        { type: String, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: i0.Optional }] }
    ]; };

    /**
     * Swagger Petstore - OpenAPI 3.0
     * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we\'ve switched to the design first approach! You can now help us improve the API whether it\'s by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3.  Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore) - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
     *
     * The version of the OpenAPI document: 1.0.9
     * Contact: apiteam@swagger.io
     *
     * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
     * https://openapi-generator.tech
     * Do not edit the class manually.
     */
    var StoreService = /** @class */ (function () {
        function StoreService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://petstore3.swagger.io/api/v3';
            this.defaultHeaders = new i1.HttpHeaders();
            this.configuration = new Configuration();
            if (configuration) {
                this.configuration = configuration;
            }
            if (typeof this.configuration.basePath !== 'string') {
                if (typeof basePath !== 'string') {
                    basePath = this.basePath;
                }
                this.configuration.basePath = basePath;
            }
            this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
        }
        StoreService.prototype.addToHttpParams = function (httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
                httpParams = this.addToHttpParamsRecursive(httpParams, value);
            }
            else {
                httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }
            return httpParams;
        };
        StoreService.prototype.addToHttpParamsRecursive = function (httpParams, value, key) {
            var _this = this;
            if (value == null) {
                return httpParams;
            }
            if (typeof value === "object") {
                if (Array.isArray(value)) {
                    value.forEach(function (elem) { return httpParams = _this.addToHttpParamsRecursive(httpParams, elem, key); });
                }
                else if (value instanceof Date) {
                    if (key != null) {
                        httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                    }
                    else {
                        throw Error("key may not be null if value is Date");
                    }
                }
                else {
                    Object.keys(value).forEach(function (k) { return httpParams = _this.addToHttpParamsRecursive(httpParams, value[k], key != null ? key + "." + k : k); });
                }
            }
            else if (key != null) {
                httpParams = httpParams.append(key, value);
            }
            else {
                throw Error("key may not be null if value is not object or array");
            }
            return httpParams;
        };
        StoreService.prototype.deleteOrder = function (orderId, observe, reportProgress, options) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (orderId === null || orderId === undefined) {
                throw new Error('Required parameter orderId was null or undefined when calling deleteOrder.');
            }
            var headers = this.defaultHeaders;
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;
            if (httpHeaderAcceptSelected === undefined) {
                // to determine the Accept header
                var httpHeaderAccepts = [];
                httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }
            if (httpHeaderAcceptSelected !== undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            var responseType_ = 'json';
            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            return this.httpClient.delete(this.configuration.basePath + "/store/order/" + encodeURIComponent(String(orderId)), {
                responseType: responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        StoreService.prototype.getInventory = function (observe, reportProgress, options) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            var credential;
            // authentication (api_key) required
            credential = this.configuration.lookupCredential('api_key');
            if (credential) {
                headers = headers.set('api_key', credential);
            }
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;
            if (httpHeaderAcceptSelected === undefined) {
                // to determine the Accept header
                var httpHeaderAccepts = [
                    'application/json'
                ];
                httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }
            if (httpHeaderAcceptSelected !== undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            var responseType_ = 'json';
            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            return this.httpClient.get(this.configuration.basePath + "/store/inventory", {
                responseType: responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        StoreService.prototype.getOrderById = function (orderId, observe, reportProgress, options) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (orderId === null || orderId === undefined) {
                throw new Error('Required parameter orderId was null or undefined when calling getOrderById.');
            }
            var headers = this.defaultHeaders;
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;
            if (httpHeaderAcceptSelected === undefined) {
                // to determine the Accept header
                var httpHeaderAccepts = [
                    'application/xml',
                    'application/json'
                ];
                httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }
            if (httpHeaderAcceptSelected !== undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            var responseType_ = 'json';
            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            return this.httpClient.get(this.configuration.basePath + "/store/order/" + encodeURIComponent(String(orderId)), {
                responseType: responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        StoreService.prototype.placeOrder = function (order, observe, reportProgress, options) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;
            if (httpHeaderAcceptSelected === undefined) {
                // to determine the Accept header
                var httpHeaderAccepts = [
                    'application/json'
                ];
                httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }
            if (httpHeaderAcceptSelected !== undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json',
                'application/xml',
                'application/x-www-form-urlencoded'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected !== undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            var responseType_ = 'json';
            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            return this.httpClient.post(this.configuration.basePath + "/store/order", order, {
                responseType: responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return StoreService;
    }());
    StoreService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function StoreService_Factory() { return new StoreService(i0__namespace.ɵɵinject(i1__namespace.HttpClient), i0__namespace.ɵɵinject(BASE_PATH, 8), i0__namespace.ɵɵinject(Configuration, 8)); }, token: StoreService, providedIn: "root" });
    StoreService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    StoreService.ctorParameters = function () { return [
        { type: i1.HttpClient },
        { type: String, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: i0.Optional }] }
    ]; };

    /**
     * Swagger Petstore - OpenAPI 3.0
     * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we\'ve switched to the design first approach! You can now help us improve the API whether it\'s by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3.  Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore) - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
     *
     * The version of the OpenAPI document: 1.0.9
     * Contact: apiteam@swagger.io
     *
     * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
     * https://openapi-generator.tech
     * Do not edit the class manually.
     */
    var UserService = /** @class */ (function () {
        function UserService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://petstore3.swagger.io/api/v3';
            this.defaultHeaders = new i1.HttpHeaders();
            this.configuration = new Configuration();
            if (configuration) {
                this.configuration = configuration;
            }
            if (typeof this.configuration.basePath !== 'string') {
                if (typeof basePath !== 'string') {
                    basePath = this.basePath;
                }
                this.configuration.basePath = basePath;
            }
            this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
        }
        UserService.prototype.addToHttpParams = function (httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
                httpParams = this.addToHttpParamsRecursive(httpParams, value);
            }
            else {
                httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }
            return httpParams;
        };
        UserService.prototype.addToHttpParamsRecursive = function (httpParams, value, key) {
            var _this = this;
            if (value == null) {
                return httpParams;
            }
            if (typeof value === "object") {
                if (Array.isArray(value)) {
                    value.forEach(function (elem) { return httpParams = _this.addToHttpParamsRecursive(httpParams, elem, key); });
                }
                else if (value instanceof Date) {
                    if (key != null) {
                        httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                    }
                    else {
                        throw Error("key may not be null if value is Date");
                    }
                }
                else {
                    Object.keys(value).forEach(function (k) { return httpParams = _this.addToHttpParamsRecursive(httpParams, value[k], key != null ? key + "." + k : k); });
                }
            }
            else if (key != null) {
                httpParams = httpParams.append(key, value);
            }
            else {
                throw Error("key may not be null if value is not object or array");
            }
            return httpParams;
        };
        UserService.prototype.createUser = function (user, observe, reportProgress, options) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;
            if (httpHeaderAcceptSelected === undefined) {
                // to determine the Accept header
                var httpHeaderAccepts = [
                    'application/json',
                    'application/xml'
                ];
                httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }
            if (httpHeaderAcceptSelected !== undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json',
                'application/xml',
                'application/x-www-form-urlencoded'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected !== undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            var responseType_ = 'json';
            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            return this.httpClient.post(this.configuration.basePath + "/user", user, {
                responseType: responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        UserService.prototype.createUsersWithListInput = function (user, observe, reportProgress, options) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;
            if (httpHeaderAcceptSelected === undefined) {
                // to determine the Accept header
                var httpHeaderAccepts = [
                    'application/xml',
                    'application/json'
                ];
                httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }
            if (httpHeaderAcceptSelected !== undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected !== undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            var responseType_ = 'json';
            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            return this.httpClient.post(this.configuration.basePath + "/user/createWithList", user, {
                responseType: responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        UserService.prototype.deleteUser = function (username, observe, reportProgress, options) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (username === null || username === undefined) {
                throw new Error('Required parameter username was null or undefined when calling deleteUser.');
            }
            var headers = this.defaultHeaders;
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;
            if (httpHeaderAcceptSelected === undefined) {
                // to determine the Accept header
                var httpHeaderAccepts = [];
                httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }
            if (httpHeaderAcceptSelected !== undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            var responseType_ = 'json';
            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            return this.httpClient.delete(this.configuration.basePath + "/user/" + encodeURIComponent(String(username)), {
                responseType: responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        UserService.prototype.getUserByName = function (username, observe, reportProgress, options) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (username === null || username === undefined) {
                throw new Error('Required parameter username was null or undefined when calling getUserByName.');
            }
            var headers = this.defaultHeaders;
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;
            if (httpHeaderAcceptSelected === undefined) {
                // to determine the Accept header
                var httpHeaderAccepts = [
                    'application/xml',
                    'application/json'
                ];
                httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }
            if (httpHeaderAcceptSelected !== undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            var responseType_ = 'json';
            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            return this.httpClient.get(this.configuration.basePath + "/user/" + encodeURIComponent(String(username)), {
                responseType: responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        UserService.prototype.loginUser = function (username, password, observe, reportProgress, options) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new i1.HttpParams({ encoder: this.encoder });
            if (username !== undefined && username !== null) {
                queryParameters = this.addToHttpParams(queryParameters, username, 'username');
            }
            if (password !== undefined && password !== null) {
                queryParameters = this.addToHttpParams(queryParameters, password, 'password');
            }
            var headers = this.defaultHeaders;
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;
            if (httpHeaderAcceptSelected === undefined) {
                // to determine the Accept header
                var httpHeaderAccepts = [
                    'application/xml',
                    'application/json'
                ];
                httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }
            if (httpHeaderAcceptSelected !== undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            var responseType_ = 'json';
            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            return this.httpClient.get(this.configuration.basePath + "/user/login", {
                params: queryParameters,
                responseType: responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        UserService.prototype.logoutUser = function (observe, reportProgress, options) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;
            if (httpHeaderAcceptSelected === undefined) {
                // to determine the Accept header
                var httpHeaderAccepts = [];
                httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }
            if (httpHeaderAcceptSelected !== undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            var responseType_ = 'json';
            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            return this.httpClient.get(this.configuration.basePath + "/user/logout", {
                responseType: responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        UserService.prototype.updateUser = function (username, user, observe, reportProgress, options) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (username === null || username === undefined) {
                throw new Error('Required parameter username was null or undefined when calling updateUser.');
            }
            var headers = this.defaultHeaders;
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;
            if (httpHeaderAcceptSelected === undefined) {
                // to determine the Accept header
                var httpHeaderAccepts = [];
                httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }
            if (httpHeaderAcceptSelected !== undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json',
                'application/xml',
                'application/x-www-form-urlencoded'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected !== undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            var responseType_ = 'json';
            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            return this.httpClient.put(this.configuration.basePath + "/user/" + encodeURIComponent(String(username)), user, {
                responseType: responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return UserService;
    }());
    UserService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function UserService_Factory() { return new UserService(i0__namespace.ɵɵinject(i1__namespace.HttpClient), i0__namespace.ɵɵinject(BASE_PATH, 8), i0__namespace.ɵɵinject(Configuration, 8)); }, token: UserService, providedIn: "root" });
    UserService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    UserService.ctorParameters = function () { return [
        { type: i1.HttpClient },
        { type: String, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: i0.Optional }] }
    ]; };

    var APIS = [PetService, StoreService, UserService];

    /**
     * Swagger Petstore - OpenAPI 3.0
     * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we\'ve switched to the design first approach! You can now help us improve the API whether it\'s by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3.  Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore) - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
     *
     * The version of the OpenAPI document: 1.0.9
     * Contact: apiteam@swagger.io
     *
     * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
     * https://openapi-generator.tech
     * Do not edit the class manually.
     */
    exports.Order = void 0;
    (function (Order) {
        Order.StatusEnum = {
            Placed: 'placed',
            Approved: 'approved',
            Delivered: 'delivered'
        };
    })(exports.Order || (exports.Order = {}));

    exports.Pet = void 0;
    (function (Pet) {
        Pet.StatusEnum = {
            Available: 'available',
            Pending: 'pending',
            Sold: 'sold'
        };
    })(exports.Pet || (exports.Pet = {}));

    var ApiModule = /** @class */ (function () {
        function ApiModule(parentModule, http) {
            if (parentModule) {
                throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
            }
            if (!http) {
                throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                    'See also https://github.com/angular/angular/issues/20575');
            }
        }
        ApiModule.forRoot = function (configurationFactory) {
            return {
                ngModule: ApiModule,
                providers: [{ provide: Configuration, useFactory: configurationFactory }]
            };
        };
        return ApiModule;
    }());
    ApiModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [],
                    declarations: [],
                    exports: [],
                    providers: []
                },] }
    ];
    ApiModule.ctorParameters = function () { return [
        { type: ApiModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] },
        { type: i1.HttpClient, decorators: [{ type: i0.Optional }] }
    ]; };

    /**
     * Generated bundle index. Do not edit.
     */

    exports.APIS = APIS;
    exports.ApiModule = ApiModule;
    exports.BASE_PATH = BASE_PATH;
    exports.COLLECTION_FORMATS = COLLECTION_FORMATS;
    exports.Configuration = Configuration;
    exports.PetService = PetService;
    exports.StoreService = StoreService;
    exports.UserService = UserService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ajpgross-petstore-client.umd.js.map
