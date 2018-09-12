import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, AUTOCOMPLETE_PANEL_HEIGHT } from '@angular/material';

import { CitylistComponent } from '../citylist/citylist.component';

import { ICity } from '../model/city';
import { IState } from '../model/state';
import { CityService } from '../services/city.service';
import { StateService } from '../services/state.service';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
  selector: 'app-cityform',
  templateUrl: './cityform.component.html',
  styleUrls: ['./cityform.component.css']
})

export class CityformComponent implements OnInit {
  msg: string;
  indLoading = false;
  cityFrm: FormGroup;
   dbops: DBOperation;
   modalTitle: string;
   modalBtnTitle: string;
  listFilter: string;
  selectedOption: string;
   city: ICity;
  // genders = [];
  // technologies = [];
  states = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _stateService: StateService,
    private _cityService: CityService,
    public dialogRef: MatDialogRef<CitylistComponent>) { }

  ngOnInit() {
    // built state form
    this.cityFrm = this.fb.group({
      CityID: [-1],
      CityName: ['', [Validators.required, Validators.maxLength(250)]],
      StateID: ['', [Validators.required]],
      // StateName : [''],
      // CountryID : [-1],
      // CountryName : [''],
      // UserID: [-1]

         });
    // this.genders = Global.genders;
    // this.technologies = Global.technologies;


    this._stateService.getAllState(Global.BASE_USER_ENDPOINT + 'State/' + 'getAllState')
    .subscribe(states => {
      this.states = states;
    });



    // subscribe on value changed event of form to show validation message
    this.cityFrm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();

    if (this.data.dbops === DBOperation.create) {
      this.cityFrm.reset();
    } else {
      this.cityFrm.setValue(this.data.city);
    }
    this.SetControlsState(this.data.dbops === DBOperation.delete ? false : true);
  }
  // form value change event
  onValueChanged(data?: any) {
    if (!this.cityFrm) { return; }
    const form = this.cityFrm;
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
    'CityName': '',
    'StateID': '',
  };
  // custom valdiation messages
  // tslint:disable-next-line:member-ordering
  validationMessages = {
    'CityName': {
      'maxlength': 'CityName cannot be more than 50 characters long.',
      'required': 'CityName is required.'
    },
    'StateID': {
      'maxlength': 'StateID cannot be more than 50 characters long.',
      'required': 'StateID is required.'
    }
  };
  onSubmit(formData: any) {
     const cityData = this.mapCityID(formData.value);
    switch (this.data.dbops) {
      case DBOperation.create:
             this._cityService.addCity(Global.BASE_USER_ENDPOINT + 'City/' + 'addCity', cityData).subscribe(
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
        this._cityService.updateCity(Global.BASE_USER_ENDPOINT + 'City/' + 'updateCity', cityData.CityID, cityData).subscribe(
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
        this._cityService.deleteCity(Global.BASE_USER_ENDPOINT + 'City/' + 'deleteCity', cityData.CityID).subscribe(
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
    isEnable ? this.cityFrm.enable() : this.cityFrm.disable();
  }

    mapCityID(city: ICity): ICity {
    if (city.CityID == null)    {
      city.CityID = -1;
      city.StateName = '';
      city.CountryID = -1;
      city.CountryName = '';
    }
    return city;
  }
}
