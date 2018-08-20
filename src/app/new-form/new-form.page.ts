import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ICustomer } from '../shared/interfaces';
import { DataService } from '../services/data.service';
import { ValidationService } from '../shared/validation.service';

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
    
    titles: Array<any>;
    genders: Array<any>;
    ethnicGroups: Array<any>;
    customerTypes: Array<any>;
    buses: Array<any>;

    validation_messages={
        'firstName':[
            { type:'required', message:'First name is required.'},
            { type:'minlength', message:'Minimum 2 characters are required for first name.'},
            { type:'pattern', message:'Just letters are allowed.'}
        ],
        'lastName':[
            { type:'required', message:'Last name is required.'},
            { type:'minlength', message:'Minimum 2 characters are required for last name.'},
            { type:'pattern', message:'Just letters are allowed.'}
        ],
        'addressLine1':[
            { type:'required', message:'Addres line 1 is required.'}
        ],
        'addressLine2':[
            { type:'required', message:'Addres line 2 is required.'}
        ],
        'postcode':[
            { type:'required', message:'Postcode is required.'}
        ],
        'email':[
            { type:'required', message:'Email is required.'}
        ],
        'city':[
            { type:'required', message:'City is required.'}
        ],
        'phoneNumber':[
            { type:'required', message:'Phone number is required.'}
        ],
        'gender':[
            { type:'required', message:'Gender is required.'}
        ],
        'ethnicGroup':[
            { type:'required', message:'Ethnich group is required.'}
        ],
        'customerType':[
            { type:'required', message:'Customer type is required.'}
        ],
        'staffMemberName':[
            { type:'required', message:'Staff member name is required.'}
        ],
        'busname':[
            { type:'required', message:'Bus name is required.'}
        ]
    }

    titleSheetOptions: any = {
        header: 'Title',
        subHeader: 'Select your title'
    };

    genderSheetOptions: any = {
        header: 'Gender',
        subHeader: 'Select your gender'
    };

    ethnicGroupsSheetOptions: any = {
        header: 'Ethnic group',
        subHeader: 'Select your ethnic group'
    };

    customerTypesSheetOptions: any = {
        header: 'Customer type',
        subHeader: 'Select your customer types'
    };

    busSheetOptions: any = {
        header: 'Bus',
        subHeader: 'Select your bus'
    };

    constructor(private router: Router,
        private route: ActivatedRoute, 
        private dataService: DataService,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        console.log("entra");
        this.buildForm();

        this.getTitles();
        this.getGenders();
        this.getEthnicGroups();
        this.getCustomerTypes();
        this.getBuses();
    }

    buildForm() {
        this.customerForm = this.formBuilder.group({
            title:[this.customer.title, Validators.required],
            firstName: [this.customer.firstName, Validators.compose([Validators.minLength(2), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            lastName:[this.customer.lastName, Validators.compose([Validators.minLength(2), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            addressLine1:[this.customer.addressLine1, Validators.required],
            addressLine2:[this.customer.addressLine2, Validators.required],
            addressLine3:[this.customer.addressLine3, Validators.required],
            postcode:[this.customer.postcode, Validators.required],
            email:[this.customer.email, [Validators.required, ValidationService.emailValidator]],
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

    getTitles() {
        this.titles = this.dataService.getTitles();
    }

    getGenders() {
        this.genders = this.dataService.getGenders();
    }

    getEthnicGroups() {
        this.ethnicGroups = this.dataService.getEthnicGroups();
    }

    getCustomerTypes() {
        this.customerTypes = this.dataService.getCustomerTypes();
    }

    getBuses() {
        this.buses = this.dataService.getBuses();
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
