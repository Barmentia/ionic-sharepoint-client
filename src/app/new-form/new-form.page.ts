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
        firstName: '',
        gender: '',
        staffMemberName: ''
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
          firstName:  [this.customer.firstName, Validators.required],
          gender:     [this.customer.gender, Validators.required],
          //email:      [this.customer.email, [Validators.required, ValidationService.emailValidator]],
          staffMemberName:    [this.customer.staffMemberName, Validators.required],
        });
    }

    submit(value : ICustomer) {
      
        this.dataService.insertCustomer(value)
            .subscribe((customer: ICustomer) => {
                if (customer) {
                    this.router.navigate(['/submitted-forms']);
                }
                else {
                    this.errorMessage = 'Unable to add customer';
                }
            },
            (err) => console.log(err));
        console.log(value);
        //alert("submited");
        //console.log(value);
    }
}
