import { ICustomerResponse } from './../shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-submitted-forms',
    templateUrl: './submitted-forms.page.html',
    styleUrls: ['./submitted-forms.page.scss'],
})
export class SubmittedFormsPage implements OnInit {

    customers: ICustomerResponse[] = [];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.getCustomers();
    }

    getCustomers() {
    this.dataService.getCustomers()
        .subscribe((response: ICustomerResponse[]) => {
            this.customers = response;
        },
        (err: any) => console.log(err));
    }
}
