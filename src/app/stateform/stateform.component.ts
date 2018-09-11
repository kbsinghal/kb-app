import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, AUTOCOMPLETE_PANEL_HEIGHT } from '@angular/material';

import { StatelistComponent } from '../statelist/statelist.component';

import { ICountry } from '../model/country';
import { IState } from '../model/state';
import { CountryService } from '../services/country.service';
import { StateService } from '../services/state.service';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
  selector: 'app-stateform',
  templateUrl: './stateform.component.html',
  styleUrls: ['./stateform.component.css']
})

export class StateformComponent implements OnInit {
  msg: string;
  indLoading = false;
  stateFrm: FormGroup;
   dbops: DBOperation;
   modalTitle: string;
   modalBtnTitle: string;
  listFilter: string;
  selectedOption: string;
   state: IState;
  // genders = [];
  // technologies = [];
  countries = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _stateService: StateService,
    private _countryService: CountryService,
    public dialogRef: MatDialogRef<StatelistComponent>) { }

  ngOnInit() {
    // built state form
    this.stateFrm = this.fb.group({
      StateID: [],
      StateName: ['', [Validators.required, Validators.maxLength(250)]],
      CountryID: [],
      UserID: [],
      CountryName: [''],
         });
    // this.genders = Global.genders;
    // this.technologies = Global.technologies;


    this._countryService.getAllCountry(Global.BASE_USER_ENDPOINT + 'Country/' + 'getAllCountry')
    .subscribe(countries => {
      this.countries = countries;
    });



    // subscribe on value changed event of form to show validation message
    this.stateFrm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();

    if (this.data.dbops === DBOperation.create) {
      this.stateFrm.reset();
    } else {
      this.stateFrm.setValue(this.data.state);
    }
    this.SetControlsState(this.data.dbops === DBOperation.delete ? false : true);
  }
  // form value change event
  onValueChanged(data?: any) {
    if (!this.stateFrm) { return; }
    const form = this.stateFrm;
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
    'StateName': '',
    'CountryID': '',
  };
  // custom valdiation messages
  // tslint:disable-next-line:member-ordering
  validationMessages = {
    'StateName': {
      'maxlength': 'statename cannot be more than 50 characters long.',
      'required': 'statename is required.'
    },
    'CountryID': {
      'maxlength': 'country cannot be more than 50 characters long.',
      'required': 'country is required.'
    }
  };
  onSubmit(formData: any) {
     const stateData = this.mapStateID(formData.value);
    switch (this.data.dbops) {
      case DBOperation.create:
             this._stateService.addState(Global.BASE_USER_ENDPOINT + 'State/' + 'addState', stateData).subscribe(
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
        this._stateService.updateState(Global.BASE_USER_ENDPOINT + 'State/' + 'updateState', stateData.StateID, stateData).subscribe(
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
        this._stateService.deleteState(Global.BASE_USER_ENDPOINT + 'State/' + 'deleteState', stateData.StateID).subscribe(
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
    isEnable ? this.stateFrm.enable() : this.stateFrm.disable();
  }

    mapStateID(state: IState): IState {
    if (state.StateID == null)    {
      state.StateID = -1;
      state.UserID = -1;
      state.CountryName = '';
    }
    return state;
  }
}
