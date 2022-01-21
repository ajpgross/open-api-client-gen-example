import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPet } from './interfaces';

@Injectable({
    providedIn: 'root'
})
export class AvailablePetsService {

    constructor(private http: HttpClient) { }

    public getAllAvailablePets(): Observable<IPet[]> {
        return this.http.get<IPet[]>(`${environment.apiRoot}/pet/findByStatus`, {
            params: new HttpParams({
                fromObject:
                    { status: 'available' }
            })
        })
    }

    public getAllSoldPets(): Observable<IPet[]> {
        return this.http.get<IPet[]>(`${environment.apiRoot}/pet/findByStatus`, {
            params: new HttpParams({
                fromObject:
                    { status: 'sold' }
            })
        })
    }
}