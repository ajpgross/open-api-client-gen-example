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
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParameterCodec } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/models';
import { Configuration } from '../configuration';
import { UserServiceInterface } from './user.serviceInterface';
import * as ɵngcc0 from '@angular/core';
export declare class UserService implements UserServiceInterface {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    private addToHttpParams;
    private addToHttpParamsRecursive;
    /**
     * Create user
     * This can only be done by the logged in user.
     * @param user Created user object
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    createUser(user?: User, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json' | 'application/xml';
    }): Observable<User>;
    createUser(user?: User, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json' | 'application/xml';
    }): Observable<HttpResponse<User>>;
    createUser(user?: User, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json' | 'application/xml';
    }): Observable<HttpEvent<User>>;
    /**
     * Creates list of users with given input array
     * Creates list of users with given input array
     * @param user
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    createUsersWithListInput(user?: Array<User>, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/xml' | 'application/json';
    }): Observable<User>;
    createUsersWithListInput(user?: Array<User>, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/xml' | 'application/json';
    }): Observable<HttpResponse<User>>;
    createUsersWithListInput(user?: Array<User>, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/xml' | 'application/json';
    }): Observable<HttpEvent<User>>;
    /**
     * Delete user
     * This can only be done by the logged in user.
     * @param username The name that needs to be deleted
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteUser(username: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
    }): Observable<any>;
    deleteUser(username: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
    }): Observable<HttpResponse<any>>;
    deleteUser(username: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
    }): Observable<HttpEvent<any>>;
    /**
     * Get user by user name
     * @param username The name that needs to be fetched. Use user1 for testing.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getUserByName(username: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/xml' | 'application/json';
    }): Observable<User>;
    getUserByName(username: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/xml' | 'application/json';
    }): Observable<HttpResponse<User>>;
    getUserByName(username: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/xml' | 'application/json';
    }): Observable<HttpEvent<User>>;
    /**
     * Logs user into the system
     * @param username The user name for login
     * @param password The password for login in clear text
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    loginUser(username?: string, password?: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/xml' | 'application/json';
    }): Observable<string>;
    loginUser(username?: string, password?: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/xml' | 'application/json';
    }): Observable<HttpResponse<string>>;
    loginUser(username?: string, password?: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/xml' | 'application/json';
    }): Observable<HttpEvent<string>>;
    /**
     * Logs out current logged in user session
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    logoutUser(observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
    }): Observable<any>;
    logoutUser(observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
    }): Observable<HttpResponse<any>>;
    logoutUser(observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
    }): Observable<HttpEvent<any>>;
    /**
     * Update user
     * This can only be done by the logged in user.
     * @param username name that need to be deleted
     * @param user Update an existent user in the store
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    updateUser(username: string, user?: User, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
    }): Observable<any>;
    updateUser(username: string, user?: User, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
    }): Observable<HttpResponse<any>>;
    updateUser(username: string, user?: User, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
    }): Observable<HttpEvent<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<UserService, [null, { optional: true; }, { optional: true; }]>;
}

//# sourceMappingURL=user.service.d.ts.map