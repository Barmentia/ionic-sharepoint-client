import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, ICustomerResponse } from '../shared/interfaces';
import { environment } from '../../environments/environment';
import { StateKey } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    baseUrl = environment.apiUrl;

    titles: Array<any> = ["Mr","Mrs","Ms","Miss","Dr","Professor","The Reverend","Sir","Dame","Lord","Lady"];
    genders: Array<any> = ["Male","Female","I identify in another way","Prefer not to say"];
    ethnicGroups: Array<any> = ["White","Asian/Asian British","Black/Black British","Mixed","Other ethnic group","Not asked","Prefer not to say"];
    customerTypes: Array<any> = ["PLWC","Relative","Carer","Friend","HCP/SCP","Employer","Person worried about cancer","Other","Prefer not to say"];
    buses: Array<any> = ["Basil","Bronwen","Bertie","Beryl","Dougie","Betty"];

    constructor(private http: HttpClient) {

    }

    getTitles() {
        return this.titles;
    }

    getGenders() {
        return this.genders;
    }

    getEthnicGroups() {
        return this.ethnicGroups;
    }

    getCustomerTypes() {
        return this.customerTypes;
    }

    getBuses() {
        return this.buses;
    }

    getCustomers() : Observable<ICustomerResponse[]> {
        return this.http.get<ICustomerResponse[]>(this.baseUrl)
            .pipe(
                   map(customers => {
                    console.log('get customers');
                       return customers;
                   }),
                   catchError(this.handleError)
                );
    }

    insertCustomer(customer: ICustomer) : Observable<ICustomer> {
        console.log("insert url = " + this.baseUrl);
        console.log("insert customer = " + customer);
        return this.http.post<ICustomerResponse>(this.baseUrl, customer)
            .pipe(                   
                map((data) => {
                       console.log('insertCustomer status: ' + data.status);
                       return data.customer;
                   }),
                catchError(this.handleError)
            );
    }
    
    private handleError(error: HttpErrorResponse) {
        console.log("there's been an error");
        console.error('server error:', error); 
        if (error.error instanceof Error) {
          let errMessage = error.error.message;
          return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'MISS API server error');
    }
}
