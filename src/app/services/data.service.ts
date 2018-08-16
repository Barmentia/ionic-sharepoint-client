import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, ICustomerResponse } from '../shared/interfaces';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) {

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
