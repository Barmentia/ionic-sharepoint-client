import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ICustomer } from '../shared/interfaces';
import { DataService } from '../services/data.service';


@Component({
    selector: 'app-new-form',
    templateUrl: './new-form.page.html',
    styleUrls: ['./new-form.page.scss'],
})
export class NewFormPage implements OnInit {

    customerForm: FormGroup;
    customer: ICustomer = {
        title: '',
        firstName: '',
        lastName: '',
        addressLine1: '',
        addressLine2: '',
        addressLine3: '',
        postcode: '',
        email: '',
        city: '',
        phoneNumber: '',
        // dateOfBirth: '',
        gender: '',
        ethnicGroup: '',
        customerType: '',
        staffMemberName: '',
        busName: ''
    };

    errorMessage: string;

    constructor(private router: Router,
        private route: ActivatedRoute, 
        private dataService: DataService,
        private formBuilder: FormBuilder) { }

        
    // constructor(private router: Router,
    //     private route: ActivatedRoute, 
    //     private formBuilder: FormBuilder) { }

    ngOnInit() {
        console.log("entra");
        this.buildForm();
    }

    buildForm() {
        this.customerForm = this.formBuilder.group({
            title:[this.customer.title, Validators.required],
            firstName:[this.customer.firstName, Validators.required],
            lastName:[this.customer.lastName, Validators.required],
            addressLine1:[this.customer.addressLine1, Validators.required],
            addressLine2:[this.customer.addressLine2, Validators.required],
            addressLine3:[this.customer.addressLine3, Validators.required],
            postcode:[this.customer.postcode, Validators.required],
            email:[this.customer.email, Validators.required],
            city:[this.customer.city, Validators.required],
            phoneNumber:[this.customer.phoneNumber, Validators.required],
            // dateOfBirth:[this.customer.dateOfBirth, Validators.required],
            gender:[this.customer.gender, Validators.required],
            ethnicGroup:[this.customer.ethnicGroup, Validators.required],
            customerType:[this.customer.customerType, Validators.required],
            staffMemberName:[this.customer.staffMemberName, Validators.required],
            busName:[this.customer.busName, Validators.required]
        });
    }

    submit(value : ICustomer) {
      
        this.dataService.insertCustomer(value)
            .subscribe((customer: ICustomer) => {
                if (customer) {
                    this.customerForm.reset();
                    this.router.navigate(['/submitted-forms']);
                }
                else {
                    this.errorMessage = 'Unable to add customer';
                }
            },
            (err) => console.log(err));
        console.log(value);
    }
}
