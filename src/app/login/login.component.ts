import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {}

        formErrors = {
            'username': '',
            'password': '',
          };
          // custom valdiation messages
          // tslint:disable-next-line:member-ordering
          validationMessages = {
            'username': {
              'maxlength': 'username cannot be more than 50 characters long.',
              'required': 'username is required.'
            },
            'password': {
              'maxlength': 'password cannot be more than 50 characters long.',
              'required': 'password is required.'
            }
          };

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();
        console.log('this.returnUrl 1:' + this.returnUrl);

        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        this.returnUrl = '/home';
        console.log('this.returnUrl 2:' + this.returnUrl);

        //home
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }


  

    onSubmit() {
        this.submitted = true;
        console.log('after: this.submitted=true');
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        console.log('after: if (this.loginForm.invalid)');

        this.loading = true;
        console.log('after: this.loading = true');
        console.log('this.f.username.value:' + this.f.username.value);
        console.log('this.f.password.value:' + this.f.password.value);
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}