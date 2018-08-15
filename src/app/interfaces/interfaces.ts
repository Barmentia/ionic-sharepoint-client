//import { ModuleWithProviders } from '@angular/core';

export interface ICustomer {
    //id?: string;
    firstName: string;
    lastName: string;
    //email: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    city: string;
    postcode: string;
    gender: string;
    staffMemberName: string;
    busName: string;
}

export interface ICustomerResponse {
    status: boolean;
    customer: ICustomer;
}