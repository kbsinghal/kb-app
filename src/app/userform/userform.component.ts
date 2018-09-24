import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, AUTOCOMPLETE_PANEL_HEIGHT } from '@angular/material';

import { UserlistComponent } from '../userlist/userlist.component';

import { IUser } from '../model/user';
//import { IState } from '../model/state';
//import { CountryService } from '../services/country.service';
import { UserService } from '../services/user.service';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})

export class UserformComponent implements OnInit {
  msg: string;
  indLoading = false;
  userFrm: FormGroup;
   dbops: DBOperation;
   modalTitle: string;
   modalBtnTitle: string;
  listFilter: string;
  selectedOption: string;
   user: IUser;
  // genders = [];
  // technologies = [];
  //countries = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _userService: UserService,
    //private _countryService: CountryService,
    public dialogRef: MatDialogRef<UserlistComponent>) { }

  ngOnInit() {
    // built state form
    this.userFrm = this.fb.group({
      UID: [],
      FirstName: ['', [Validators.required, Validators.maxLength(250)]],
      LastName: [],
      Email: ['', [Validators.required, Validators.email, Validators.maxLength(250)]],
      UserName: ['', [Validators.required, Validators.maxLength(100)]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      UserID: [-1],       
    });
    // this.genders = Global.genders;
    // this.technologies = Global.technologies;


    // this._countryService.getAllCountry(Global.BASE_USER_ENDPOINT + 'Country/' + 'getAllCountry')
    // .subscribe(countries => {
    //   this.countries = countries;
    // });



    // subscribe on value changed event of form to show validation message
    this.userFrm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();

    if (this.data.dbops === DBOperation.create) {
      this.userFrm.reset();
    } else {
      this.userFrm.setValue(this.data.user);
    }
    this.SetControlsState(this.data.dbops === DBOperation.delete ? false : true);
  }
  // form value change event
  onValueChanged(data?: any) {
    if (!this.userFrm) { return; }
    const form = this.userFrm;
    // tslint:disable-next-line:forin
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      // setup custom validation message to form
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        // tslint:disable-next-line:forin
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  // form errors model
  // tslint:disable-next-line:member-ordering
  formErrors = {
    'FirstName': '',
    'Email': '',
    'UserName': '',
    'Password': '',

  };
  // custom valdiation messages
  // tslint:disable-next-line:member-ordering
  validationMessages = {
    'FirstName': {
      'maxlength': 'FirstName cannot be more than 50 characters long.',
      'required': 'FirstName is required.'
    },
    'Email': {
      'maxlength': 'Email cannot be more than 50 characters long.',
      'required': 'Email is required.'
    },
    'UserName': {
      'maxlength': 'UserName cannot be more than 50 characters long.',
      'required': 'UserName is required.'
    },
    'Password': {
      'maxlength': 'Password cannot be more than 50 characters long.',
      'required': 'Password is required.'
    }
  };
  onSubmit(formData: any) {
     const userData = this.mapUserID(formData.value);
    switch (this.data.dbops) {
      case DBOperation.create:
             this._userService.addUser(Global.BASE_USER_ENDPOINT + 'User/' + 'addUser', userData).subscribe(
          data => {
            // Success
            if (data.message) {
              this.dialogRef.close('success');
            } else {
              this.dialogRef.close('error');
            }
          },
          error => {
            this.dialogRef.close('error');
          }
        );
        break;
      case DBOperation.update:
        this._userService.updateUser(Global.BASE_USER_ENDPOINT + 'User/' + 'updateUser', userData.UserID, userData).subscribe(
          data => {
            // Success
            if (data.message) {
              this.dialogRef.close('success');
            } else {
              this.dialogRef.close('error');
            }
          },
          error => {
            this.dialogRef.close('error');
          }
        );
        break;
      case DBOperation.delete:
        this._userService.deleteUser(Global.BASE_USER_ENDPOINT + 'User/' + 'deleteUser', userData.UserID).subscribe(
          data => {
            // Success
            if (data.message) {
              this.dialogRef.close('success');
            } else {
              this.dialogRef.close('error');
            }
          },
          error => {
            this.dialogRef.close('error');
          }
        );
        break;
    }
  }
  SetControlsState(isEnable: boolean) {
    isEnable ? this.userFrm.enable() : this.userFrm.disable();
  }

    mapUserID(user: IUser): IUser {
    if (user.UID == null)    {
      user.UID = -1;
      user.UserID = -1;
    }
    return user;
  }
}
