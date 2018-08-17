import { ModuleWithProviders } from '@angular/core';

export interface ICustomer {
    title: string;
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    postcode: string;
    email: string;
    city: string;
    phoneNumber: string;
    //dateOfBirth: string;
    gender: string;
    ethnicGroup: string;
    customerType: string;
    staffMemberName: string;
    busName: string;
}

export interface ICustomerResponse {
    status: boolean;
    customer: ICustomer;
}