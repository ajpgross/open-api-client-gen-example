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
/* tslint:disable:no-unused-variable member-ordering */
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../variables";
import * as i3 from "../configuration";
export class StoreService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://petstore3.swagger.io/api/v3';
        this.defaultHeaders = new HttpHeaders();
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
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
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
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteOrder(orderId, observe = 'body', reportProgress = false, options) {
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling deleteOrder.');
        }
        let headers = this.defaultHeaders;
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/store/order/${encodeURIComponent(String(orderId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    getInventory(observe = 'body', reportProgress = false, options) {
        let headers = this.defaultHeaders;
        let credential;
        // authentication (api_key) required
        credential = this.configuration.lookupCredential('api_key');
        if (credential) {
            headers = headers.set('api_key', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/store/inventory`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    getOrderById(orderId, observe = 'body', reportProgress = false, options) {
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling getOrderById.');
        }
        let headers = this.defaultHeaders;
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/xml',
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/store/order/${encodeURIComponent(String(orderId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    placeOrder(order, observe = 'body', reportProgress = false, options) {
        let headers = this.defaultHeaders;
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/xml',
            'application/x-www-form-urlencoded'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/store/order`, order, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
StoreService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StoreService_Factory() { return new StoreService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.BASE_PATH, 8), i0.ɵɵinject(i3.Configuration, 8)); }, token: StoreService, providedIn: "root" });
StoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
StoreService.ctorParameters = () => [
    { type: HttpClient },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [BASE_PATH,] }] },
    { type: Configuration, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwaS9zdG9yZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDSCx1REFBdUQ7QUFFdkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQTJCLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFDc0IsTUFBWSxzQkFBc0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBK0IsWUFBWSxDQUFDO0FBSy9FLE9BQU8sRUFBRSxTQUFTLEVBQXNCLE1BQTBCLGNBQWMsQ0FBQztBQUNqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQTBDLGtCQUFrQixDQUFDOzs7OztBQVVyRixNQUFNLE9BQU8sWUFBWTtJQU9yQixZQUFzQixVQUFzQixFQUFnQyxRQUFnQixFQUFjLGFBQTRCO1FBQWhILGVBQVUsR0FBVixVQUFVLENBQVk7UUFMbEMsYUFBUSxHQUFHLHFDQUFxQyxDQUFDO1FBQ3BELG1CQUFjLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNuQyxrQkFBYSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFJdkMsSUFBSSxhQUFhLEVBQUU7WUFDZixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztTQUN0QztRQUNELElBQUksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDakQsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7Z0JBQzlCLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzVCO1lBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sSUFBSSxJQUFJ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QixDQUFDLENBQUM7U0FDN0Q7UUFHRCx1Q0FBdUM7UUFDdkMsTUFBTSxRQUFRLEdBQWE7WUFDdkIsa0JBQWtCO1lBQ2xCLGlCQUFpQjtZQUNqQixtQ0FBbUM7U0FDdEMsQ0FBQztRQUNGLE1BQU0sdUJBQXVCLEdBQXVCLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekcsSUFBSSx1QkFBdUIsS0FBSyxTQUFTLEVBQUU7WUFDdkMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLHVCQUF1QixDQUFDLENBQUM7U0FDbEU7UUFFRCxJQUFJLGFBQWEsR0FBb0IsTUFBTSxDQUFDO1FBQzVDLElBQUcsd0JBQXdCLElBQUksd0JBQXdCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3hFLGFBQWEsR0FBRyxNQUFNLENBQUM7U0FDMUI7UUFFRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLGNBQWMsRUFDM0UsS0FBSyxFQUNMO1lBQ0ksWUFBWSxFQUFPLGFBQWE7WUFDaEMsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZTtZQUNuRCxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUUsY0FBYztTQUNqQyxDQUNKLENBQUM7SUFDTixDQUFDOzs7O1lBOVBKLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBakJRLFVBQVU7eUNBeUJnQyxRQUFRLFlBQUcsTUFBTSxTQUFDLFNBQVM7WUFqQnJFLGFBQWEsdUJBaUI2RSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTd2FnZ2VyIFBldHN0b3JlIC0gT3BlbkFQSSAzLjBcbiAqIFRoaXMgaXMgYSBzYW1wbGUgUGV0IFN0b3JlIFNlcnZlciBiYXNlZCBvbiB0aGUgT3BlbkFQSSAzLjAgc3BlY2lmaWNhdGlvbi4gIFlvdSBjYW4gZmluZCBvdXQgbW9yZSBhYm91dCBTd2FnZ2VyIGF0IFtodHRwOi8vc3dhZ2dlci5pb10oaHR0cDovL3N3YWdnZXIuaW8pLiBJbiB0aGUgdGhpcmQgaXRlcmF0aW9uIG9mIHRoZSBwZXQgc3RvcmUsIHdlXFwndmUgc3dpdGNoZWQgdG8gdGhlIGRlc2lnbiBmaXJzdCBhcHByb2FjaCEgWW91IGNhbiBub3cgaGVscCB1cyBpbXByb3ZlIHRoZSBBUEkgd2hldGhlciBpdFxcJ3MgYnkgbWFraW5nIGNoYW5nZXMgdG8gdGhlIGRlZmluaXRpb24gaXRzZWxmIG9yIHRvIHRoZSBjb2RlLiBUaGF0IHdheSwgd2l0aCB0aW1lLCB3ZSBjYW4gaW1wcm92ZSB0aGUgQVBJIGluIGdlbmVyYWwsIGFuZCBleHBvc2Ugc29tZSBvZiB0aGUgbmV3IGZlYXR1cmVzIGluIE9BUzMuICBTb21lIHVzZWZ1bCBsaW5rczogLSBbVGhlIFBldCBTdG9yZSByZXBvc2l0b3J5XShodHRwczovL2dpdGh1Yi5jb20vc3dhZ2dlci1hcGkvc3dhZ2dlci1wZXRzdG9yZSkgLSBbVGhlIHNvdXJjZSBBUEkgZGVmaW5pdGlvbiBmb3IgdGhlIFBldCBTdG9yZV0oaHR0cHM6Ly9naXRodWIuY29tL3N3YWdnZXItYXBpL3N3YWdnZXItcGV0c3RvcmUvYmxvYi9tYXN0ZXIvc3JjL21haW4vcmVzb3VyY2VzL29wZW5hcGkueWFtbClcbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMS4wLjlcbiAqIENvbnRhY3Q6IGFwaXRlYW1Ac3dhZ2dlci5pb1xuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuLyogdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLXZhcmlhYmxlIG1lbWJlci1vcmRlcmluZyAqL1xuXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyxcbiAgICAgICAgIEh0dHBSZXNwb25zZSwgSHR0cEV2ZW50LCBIdHRwUGFyYW1ldGVyQ29kZWMgfSAgICAgICBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDdXN0b21IdHRwUGFyYW1ldGVyQ29kZWMgfSAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vZW5jb2Rlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vbW9kZWwvbW9kZWxzJztcblxuaW1wb3J0IHsgQkFTRV9QQVRILCBDT0xMRUNUSU9OX0ZPUk1BVFMgfSAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29uZmlndXJhdGlvbic7XG5pbXBvcnQge1xuICAgIFN0b3JlU2VydmljZUludGVyZmFjZVxufSBmcm9tICcuL3N0b3JlLnNlcnZpY2VJbnRlcmZhY2UnO1xuXG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVTZXJ2aWNlIGltcGxlbWVudHMgU3RvcmVTZXJ2aWNlSW50ZXJmYWNlIHtcblxuICAgIHByb3RlY3RlZCBiYXNlUGF0aCA9ICdodHRwczovL3BldHN0b3JlMy5zd2FnZ2VyLmlvL2FwaS92Myc7XG4gICAgcHVibGljIGRlZmF1bHRIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbigpO1xuICAgIHB1YmxpYyBlbmNvZGVyOiBIdHRwUGFyYW1ldGVyQ29kZWM7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudCwgQE9wdGlvbmFsKClASW5qZWN0KEJBU0VfUEFUSCkgYmFzZVBhdGg6IHN0cmluZywgQE9wdGlvbmFsKCkgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xuICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlndXJhdGlvbi5iYXNlUGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYmFzZVBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgYmFzZVBhdGggPSB0aGlzLmJhc2VQYXRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmNvZGVyID0gdGhpcy5jb25maWd1cmF0aW9uLmVuY29kZXIgfHwgbmV3IEN1c3RvbUh0dHBQYXJhbWV0ZXJDb2RlYygpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBhZGRUb0h0dHBQYXJhbXMoaHR0cFBhcmFtczogSHR0cFBhcmFtcywgdmFsdWU6IGFueSwga2V5Pzogc3RyaW5nKTogSHR0cFBhcmFtcyB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBEYXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaHR0cFBhcmFtcyA9IHRoaXMuYWRkVG9IdHRwUGFyYW1zUmVjdXJzaXZlKGh0dHBQYXJhbXMsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGh0dHBQYXJhbXMgPSB0aGlzLmFkZFRvSHR0cFBhcmFtc1JlY3Vyc2l2ZShodHRwUGFyYW1zLCB2YWx1ZSwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaHR0cFBhcmFtcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFRvSHR0cFBhcmFtc1JlY3Vyc2l2ZShodHRwUGFyYW1zOiBIdHRwUGFyYW1zLCB2YWx1ZT86IGFueSwga2V5Pzogc3RyaW5nKTogSHR0cFBhcmFtcyB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gaHR0cFBhcmFtcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICh2YWx1ZSBhcyBhbnlbXSkuZm9yRWFjaCggZWxlbSA9PiBodHRwUGFyYW1zID0gdGhpcy5hZGRUb0h0dHBQYXJhbXNSZWN1cnNpdmUoaHR0cFBhcmFtcywgZWxlbSwga2V5KSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5hcHBlbmQoa2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlIGFzIERhdGUpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImtleSBtYXkgbm90IGJlIG51bGwgaWYgdmFsdWUgaXMgRGF0ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKCBrID0+IGh0dHBQYXJhbXMgPSB0aGlzLmFkZFRvSHR0cFBhcmFtc1JlY3Vyc2l2ZShcbiAgICAgICAgICAgICAgICAgICAgaHR0cFBhcmFtcywgdmFsdWVba10sIGtleSAhPSBudWxsID8gYCR7a2V5fS4ke2t9YCA6IGspKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJrZXkgbWF5IG5vdCBiZSBudWxsIGlmIHZhbHVlIGlzIG5vdCBvYmplY3Qgb3IgYXJyYXlcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGh0dHBQYXJhbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHB1cmNoYXNlIG9yZGVyIGJ5IElEXG4gICAgICogRm9yIHZhbGlkIHJlc3BvbnNlIHRyeSBpbnRlZ2VyIElEcyB3aXRoIHZhbHVlICZsdDsgMTAwMC4gQW55dGhpbmcgYWJvdmUgMTAwMCBvciBub25pbnRlZ2VycyB3aWxsIGdlbmVyYXRlIEFQSSBlcnJvcnNcbiAgICAgKiBAcGFyYW0gb3JkZXJJZCBJRCBvZiB0aGUgb3JkZXIgdGhhdCBuZWVkcyB0byBiZSBkZWxldGVkXG4gICAgICogQHBhcmFtIG9ic2VydmUgc2V0IHdoZXRoZXIgb3Igbm90IHRvIHJldHVybiB0aGUgZGF0YSBPYnNlcnZhYmxlIGFzIHRoZSBib2R5LCByZXNwb25zZSBvciBldmVudHMuIGRlZmF1bHRzIHRvIHJldHVybmluZyB0aGUgYm9keS5cbiAgICAgKiBAcGFyYW0gcmVwb3J0UHJvZ3Jlc3MgZmxhZyB0byByZXBvcnQgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcHJvZ3Jlc3MuXG4gICAgICovXG4gICAgcHVibGljIGRlbGV0ZU9yZGVyKG9yZGVySWQ6IG51bWJlciwgb2JzZXJ2ZT86ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuLCBvcHRpb25zPzoge2h0dHBIZWFkZXJBY2NlcHQ/OiB1bmRlZmluZWR9KTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHB1YmxpYyBkZWxldGVPcmRlcihvcmRlcklkOiBudW1iZXIsIG9ic2VydmU/OiAncmVzcG9uc2UnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4sIG9wdGlvbnM/OiB7aHR0cEhlYWRlckFjY2VwdD86IHVuZGVmaW5lZH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PjtcbiAgICBwdWJsaWMgZGVsZXRlT3JkZXIob3JkZXJJZDogbnVtYmVyLCBvYnNlcnZlPzogJ2V2ZW50cycsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbiwgb3B0aW9ucz86IHtodHRwSGVhZGVyQWNjZXB0PzogdW5kZWZpbmVkfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+O1xuICAgIHB1YmxpYyBkZWxldGVPcmRlcihvcmRlcklkOiBudW1iZXIsIG9ic2VydmU6IGFueSA9ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZSwgb3B0aW9ucz86IHtodHRwSGVhZGVyQWNjZXB0PzogdW5kZWZpbmVkfSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGlmIChvcmRlcklkID09PSBudWxsIHx8IG9yZGVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlZCBwYXJhbWV0ZXIgb3JkZXJJZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGRlbGV0ZU9yZGVyLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xuXG4gICAgICAgIGxldCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5odHRwSGVhZGVyQWNjZXB0O1xuICAgICAgICBpZiAoaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQWNjZXB0IGhlYWRlclxuICAgICAgICAgICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdHM6IHN0cmluZ1tdID0gW1xuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJBY2NlcHQoaHR0cEhlYWRlckFjY2VwdHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBY2NlcHQnLCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpO1xuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgcmVzcG9uc2VUeXBlXzogJ3RleHQnIHwgJ2pzb24nID0gJ2pzb24nO1xuICAgICAgICBpZihodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgJiYgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkLnN0YXJ0c1dpdGgoJ3RleHQnKSkge1xuICAgICAgICAgICAgcmVzcG9uc2VUeXBlXyA9ICd0ZXh0JztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZGVsZXRlPGFueT4oYCR7dGhpcy5jb25maWd1cmF0aW9uLmJhc2VQYXRofS9zdG9yZS9vcmRlci8ke2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcob3JkZXJJZCkpfWAsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiA8YW55PnJlc3BvbnNlVHlwZV8sXG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24ud2l0aENyZWRlbnRpYWxzLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZTogb2JzZXJ2ZSxcbiAgICAgICAgICAgICAgICByZXBvcnRQcm9ncmVzczogcmVwb3J0UHJvZ3Jlc3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHBldCBpbnZlbnRvcmllcyBieSBzdGF0dXNcbiAgICAgKiBSZXR1cm5zIGEgbWFwIG9mIHN0YXR1cyBjb2RlcyB0byBxdWFudGl0aWVzXG4gICAgICogQHBhcmFtIG9ic2VydmUgc2V0IHdoZXRoZXIgb3Igbm90IHRvIHJldHVybiB0aGUgZGF0YSBPYnNlcnZhYmxlIGFzIHRoZSBib2R5LCByZXNwb25zZSBvciBldmVudHMuIGRlZmF1bHRzIHRvIHJldHVybmluZyB0aGUgYm9keS5cbiAgICAgKiBAcGFyYW0gcmVwb3J0UHJvZ3Jlc3MgZmxhZyB0byByZXBvcnQgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcHJvZ3Jlc3MuXG4gICAgICovXG4gICAgcHVibGljIGdldEludmVudG9yeShvYnNlcnZlPzogJ2JvZHknLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4sIG9wdGlvbnM/OiB7aHR0cEhlYWRlckFjY2VwdD86ICdhcHBsaWNhdGlvbi9qc29uJ30pOiBPYnNlcnZhYmxlPHsgW2tleTogc3RyaW5nXTogbnVtYmVyOyB9PjtcbiAgICBwdWJsaWMgZ2V0SW52ZW50b3J5KG9ic2VydmU/OiAncmVzcG9uc2UnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4sIG9wdGlvbnM/OiB7aHR0cEhlYWRlckFjY2VwdD86ICdhcHBsaWNhdGlvbi9qc29uJ30pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTx7IFtrZXk6IHN0cmluZ106IG51bWJlcjsgfT4+O1xuICAgIHB1YmxpYyBnZXRJbnZlbnRvcnkob2JzZXJ2ZT86ICdldmVudHMnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4sIG9wdGlvbnM/OiB7aHR0cEhlYWRlckFjY2VwdD86ICdhcHBsaWNhdGlvbi9qc29uJ30pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDx7IFtrZXk6IHN0cmluZ106IG51bWJlcjsgfT4+O1xuICAgIHB1YmxpYyBnZXRJbnZlbnRvcnkob2JzZXJ2ZTogYW55ID0gJ2JvZHknLCByZXBvcnRQcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlLCBvcHRpb25zPzoge2h0dHBIZWFkZXJBY2NlcHQ/OiAnYXBwbGljYXRpb24vanNvbid9KTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuZGVmYXVsdEhlYWRlcnM7XG5cbiAgICAgICAgbGV0IGNyZWRlbnRpYWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gYXV0aGVudGljYXRpb24gKGFwaV9rZXkpIHJlcXVpcmVkXG4gICAgICAgIGNyZWRlbnRpYWwgPSB0aGlzLmNvbmZpZ3VyYXRpb24ubG9va3VwQ3JlZGVudGlhbCgnYXBpX2tleScpO1xuICAgICAgICBpZiAoY3JlZGVudGlhbCkge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdhcGlfa2V5JywgY3JlZGVudGlhbCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBvcHRpb25zICYmIG9wdGlvbnMuaHR0cEhlYWRlckFjY2VwdDtcbiAgICAgICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIEFjY2VwdCBoZWFkZXJcbiAgICAgICAgICAgIGNvbnN0IGh0dHBIZWFkZXJBY2NlcHRzOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQWNjZXB0KGh0dHBIZWFkZXJBY2NlcHRzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQWNjZXB0JywgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbGV0IHJlc3BvbnNlVHlwZV86ICd0ZXh0JyB8ICdqc29uJyA9ICdqc29uJztcbiAgICAgICAgaWYoaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkICYmIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZC5zdGFydHNXaXRoKCd0ZXh0JykpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZV8gPSAndGV4dCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDx7IFtrZXk6IHN0cmluZ106IG51bWJlcjsgfT4oYCR7dGhpcy5jb25maWd1cmF0aW9uLmJhc2VQYXRofS9zdG9yZS9pbnZlbnRvcnlgLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogPGFueT5yZXNwb25zZVR5cGVfLFxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5jb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgICAgIG9ic2VydmU6IG9ic2VydmUsXG4gICAgICAgICAgICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHJlcG9ydFByb2dyZXNzXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCBwdXJjaGFzZSBvcmRlciBieSBJRFxuICAgICAqIEZvciB2YWxpZCByZXNwb25zZSB0cnkgaW50ZWdlciBJRHMgd2l0aCB2YWx1ZSAmbHQ7JiN4M0Q7IDUgb3IgJmd0OyAxMC4gT3RoZXIgdmFsdWVzIHdpbGwgZ2VuZXJhdGVkIGV4Y2VwdGlvbnNcbiAgICAgKiBAcGFyYW0gb3JkZXJJZCBJRCBvZiBvcmRlciB0aGF0IG5lZWRzIHRvIGJlIGZldGNoZWRcbiAgICAgKiBAcGFyYW0gb2JzZXJ2ZSBzZXQgd2hldGhlciBvciBub3QgdG8gcmV0dXJuIHRoZSBkYXRhIE9ic2VydmFibGUgYXMgdGhlIGJvZHksIHJlc3BvbnNlIG9yIGV2ZW50cy4gZGVmYXVsdHMgdG8gcmV0dXJuaW5nIHRoZSBib2R5LlxuICAgICAqIEBwYXJhbSByZXBvcnRQcm9ncmVzcyBmbGFnIHRvIHJlcG9ydCByZXF1ZXN0IGFuZCByZXNwb25zZSBwcm9ncmVzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0T3JkZXJCeUlkKG9yZGVySWQ6IG51bWJlciwgb2JzZXJ2ZT86ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuLCBvcHRpb25zPzoge2h0dHBIZWFkZXJBY2NlcHQ/OiAnYXBwbGljYXRpb24veG1sJyB8ICdhcHBsaWNhdGlvbi9qc29uJ30pOiBPYnNlcnZhYmxlPE9yZGVyPjtcbiAgICBwdWJsaWMgZ2V0T3JkZXJCeUlkKG9yZGVySWQ6IG51bWJlciwgb2JzZXJ2ZT86ICdyZXNwb25zZScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbiwgb3B0aW9ucz86IHtodHRwSGVhZGVyQWNjZXB0PzogJ2FwcGxpY2F0aW9uL3htbCcgfCAnYXBwbGljYXRpb24vanNvbid9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T3JkZXI+PjtcbiAgICBwdWJsaWMgZ2V0T3JkZXJCeUlkKG9yZGVySWQ6IG51bWJlciwgb2JzZXJ2ZT86ICdldmVudHMnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4sIG9wdGlvbnM/OiB7aHR0cEhlYWRlckFjY2VwdD86ICdhcHBsaWNhdGlvbi94bWwnIHwgJ2FwcGxpY2F0aW9uL2pzb24nfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PE9yZGVyPj47XG4gICAgcHVibGljIGdldE9yZGVyQnlJZChvcmRlcklkOiBudW1iZXIsIG9ic2VydmU6IGFueSA9ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZSwgb3B0aW9ucz86IHtodHRwSGVhZGVyQWNjZXB0PzogJ2FwcGxpY2F0aW9uL3htbCcgfCAnYXBwbGljYXRpb24vanNvbid9KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgaWYgKG9yZGVySWQgPT09IG51bGwgfHwgb3JkZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciBvcmRlcklkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgZ2V0T3JkZXJCeUlkLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xuXG4gICAgICAgIGxldCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5odHRwSGVhZGVyQWNjZXB0O1xuICAgICAgICBpZiAoaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQWNjZXB0IGhlYWRlclxuICAgICAgICAgICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdHM6IHN0cmluZ1tdID0gW1xuICAgICAgICAgICAgICAgICdhcHBsaWNhdGlvbi94bWwnLFxuICAgICAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJBY2NlcHQoaHR0cEhlYWRlckFjY2VwdHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBY2NlcHQnLCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpO1xuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgcmVzcG9uc2VUeXBlXzogJ3RleHQnIHwgJ2pzb24nID0gJ2pzb24nO1xuICAgICAgICBpZihodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgJiYgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkLnN0YXJ0c1dpdGgoJ3RleHQnKSkge1xuICAgICAgICAgICAgcmVzcG9uc2VUeXBlXyA9ICd0ZXh0JztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PE9yZGVyPihgJHt0aGlzLmNvbmZpZ3VyYXRpb24uYmFzZVBhdGh9L3N0b3JlL29yZGVyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhvcmRlcklkKSl9YCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6IDxhbnk+cmVzcG9uc2VUeXBlXyxcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuY29uZmlndXJhdGlvbi53aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxuICAgICAgICAgICAgICAgIHJlcG9ydFByb2dyZXNzOiByZXBvcnRQcm9ncmVzc1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYWNlIGFuIG9yZGVyIGZvciBhIHBldFxuICAgICAqIFBsYWNlIGEgbmV3IG9yZGVyIGluIHRoZSBzdG9yZVxuICAgICAqIEBwYXJhbSBvcmRlciBcbiAgICAgKiBAcGFyYW0gb2JzZXJ2ZSBzZXQgd2hldGhlciBvciBub3QgdG8gcmV0dXJuIHRoZSBkYXRhIE9ic2VydmFibGUgYXMgdGhlIGJvZHksIHJlc3BvbnNlIG9yIGV2ZW50cy4gZGVmYXVsdHMgdG8gcmV0dXJuaW5nIHRoZSBib2R5LlxuICAgICAqIEBwYXJhbSByZXBvcnRQcm9ncmVzcyBmbGFnIHRvIHJlcG9ydCByZXF1ZXN0IGFuZCByZXNwb25zZSBwcm9ncmVzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGxhY2VPcmRlcihvcmRlcj86IE9yZGVyLCBvYnNlcnZlPzogJ2JvZHknLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4sIG9wdGlvbnM/OiB7aHR0cEhlYWRlckFjY2VwdD86ICdhcHBsaWNhdGlvbi9qc29uJ30pOiBPYnNlcnZhYmxlPE9yZGVyPjtcbiAgICBwdWJsaWMgcGxhY2VPcmRlcihvcmRlcj86IE9yZGVyLCBvYnNlcnZlPzogJ3Jlc3BvbnNlJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuLCBvcHRpb25zPzoge2h0dHBIZWFkZXJBY2NlcHQ/OiAnYXBwbGljYXRpb24vanNvbid9KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T3JkZXI+PjtcbiAgICBwdWJsaWMgcGxhY2VPcmRlcihvcmRlcj86IE9yZGVyLCBvYnNlcnZlPzogJ2V2ZW50cycsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbiwgb3B0aW9ucz86IHtodHRwSGVhZGVyQWNjZXB0PzogJ2FwcGxpY2F0aW9uL2pzb24nfSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PE9yZGVyPj47XG4gICAgcHVibGljIHBsYWNlT3JkZXIob3JkZXI/OiBPcmRlciwgb2JzZXJ2ZTogYW55ID0gJ2JvZHknLCByZXBvcnRQcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlLCBvcHRpb25zPzoge2h0dHBIZWFkZXJBY2NlcHQ/OiAnYXBwbGljYXRpb24vanNvbid9KTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuZGVmYXVsdEhlYWRlcnM7XG5cbiAgICAgICAgbGV0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gb3B0aW9ucyAmJiBvcHRpb25zLmh0dHBIZWFkZXJBY2NlcHQ7XG4gICAgICAgIGlmIChodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBBY2NlcHQgaGVhZGVyXG4gICAgICAgICAgICBjb25zdCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbXG4gICAgICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0FjY2VwdCcsIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQ29udGVudC1UeXBlIGhlYWRlclxuICAgICAgICBjb25zdCBjb25zdW1lczogc3RyaW5nW10gPSBbXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnYXBwbGljYXRpb24veG1sJyxcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGh0dHBDb250ZW50VHlwZVNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQ29udGVudFR5cGUoY29uc3VtZXMpO1xuICAgICAgICBpZiAoaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCBodHRwQ29udGVudFR5cGVTZWxlY3RlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzcG9uc2VUeXBlXzogJ3RleHQnIHwgJ2pzb24nID0gJ2pzb24nO1xuICAgICAgICBpZihodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgJiYgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkLnN0YXJ0c1dpdGgoJ3RleHQnKSkge1xuICAgICAgICAgICAgcmVzcG9uc2VUeXBlXyA9ICd0ZXh0JztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdDxPcmRlcj4oYCR7dGhpcy5jb25maWd1cmF0aW9uLmJhc2VQYXRofS9zdG9yZS9vcmRlcmAsXG4gICAgICAgICAgICBvcmRlcixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6IDxhbnk+cmVzcG9uc2VUeXBlXyxcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuY29uZmlndXJhdGlvbi53aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxuICAgICAgICAgICAgICAgIHJlcG9ydFByb2dyZXNzOiByZXBvcnRQcm9ncmVzc1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxufVxuIl19