import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, AUTOCOMPLETE_PANEL_HEIGHT } from '@angular/material';

import { CountrylistComponent } from '../countrylist/countrylist.component';

import { ICountry } from '../model/country';
import { CountryService } from '../services/country.service';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
  selector: 'app-countryform',
  templateUrl: './countryform.component.html',
  styleUrls: ['./countryform.component.css']
})

export class CountryformComponent implements OnInit {
  msg: string;
  indLoading = false;
  countryFrm: FormGroup;
   dbops: DBOperation;
   modalTitle: string;
   modalBtnTitle: string;
  listFilter: string;
  selectedOption: string;
   country: ICountry;
  // genders = [];
  // technologies = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _countryService: CountryService,
    public dialogRef: MatDialogRef<CountrylistComponent>) { }

  ngOnInit() {
    // built country form
    this.countryFrm = this.fb.group({
      CountryID: [-1],
      CountryName: ['', [Validators.required, Validators.maxLength(250)]],
      UserID: [-1]
         });
    // this.genders = Global.genders;
    // this.technologies = Global.technologies;

    // this.countryFrm.setValue({
    //   CountryID: -1,
    //   UserID: -1
    // // CountryName: ' '
    // });

    // subscribe on value changed event of form to show validation message
    this.countryFrm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();

    if (this.data.dbops === DBOperation.create) {
      this.countryFrm.reset();
    } else {
      this.countryFrm.setValue(this.data.country);
    }
    this.SetControlsState(this.data.dbops === DBOperation.delete ? false : true);
  }
  // form value change event
  onValueChanged(data?: any) {
    if (!this.countryFrm) { return; }
    const form = this.countryFrm;
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
    'CountryName': '',
  };
  // custom valdiation messages
  // tslint:disable-next-line:member-ordering
  validationMessages = {
    'CountryName': {
      'maxlength': 'countryname cannot be more than 50 characters long.',
      'required': 'countryname is required.'
    }
  };
  onSubmit(formData: any) {
     const countryData = this.mapCountryID(formData.value);
    switch (this.data.dbops) {
      case DBOperation.create:
             this._countryService.addCountry(Global.BASE_USER_ENDPOINT + 'Country/' + 'addCountry', countryData).subscribe(
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
        this._countryService.updateCountry(Global.BASE_USER_ENDPOINT + 'Country/' + 'updateCountry', countryData.CountryID, countryData).subscribe(
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
        this._countryService.deleteCountry(Global.BASE_USER_ENDPOINT + 'Country/' + 'deleteCountry', countryData.CountryID).subscribe(
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
    isEnable ? this.countryFrm.enable() : this.countryFrm.disable();
  }

    mapCountryID(country: ICountry): ICountry {
      if (country.CountryID == null)    {
      country.CountryID = -1;
      country.UserID = 1;
    }
    return country;
  }
}
