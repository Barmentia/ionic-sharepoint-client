import { Injectable } from '@angular/core';
import { Observable,  } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '../../../node_modules/@types/selenium-webdriver/http';

import { ICustomer, ICustomerResponse } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { 

  }
  
  insertCustomer(customer: ICustomer) : Observable<ICustomer> {
    return this.http.post<ICustomerResponse>(this.baseUrl, customer)
        .pipe(                   
            map((data) => {
                   console.log('insertCustomer status: ' + data.status);
                   return data;
               }),
            catchError(this.handleError)
        );
  }
}
