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
    dateOfBirthComponent: DateOfBirth;
    dateOfBirth: string;
    gender: string;
    ethnicGroup: string;
    customerType: Array<string>;
    staffMemberName: string;
    busName: string;
}

export interface ICustomerResponse {
    staffMemberName: string;
    serviceLocationPostCode: string
    busName: string;
    created: string;
}

export class DateOfBirth {
    day: any;
    month: any;
    year: any;
}

export interface ICustomerResponse {
    status: boolean;
    customer: ICustomer;
}