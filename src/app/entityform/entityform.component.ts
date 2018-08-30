import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, AUTOCOMPLETE_PANEL_HEIGHT } from '@angular/material';

import { EntitylistComponent } from '../entitylist/entitylist.component';

import { ICity } from '../model/city';
import { IState } from '../model/state';
import { IArea } from '../model/area';
import { ICountry } from '../model/country';
import { IEntity } from '../model/entity';

import { CityService } from '../services/city.service';
import { StateService } from '../services/state.service';
import { CountryService } from '../services/country.service';
import { AreaService } from '../services/area.service';
import { EntityService } from '../services/entity.service';

import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
  selector: 'app-entityform',
  templateUrl: './entityform.component.html',
  styleUrls: ['./entityform.component.css']
})

export class EntityformComponent implements OnInit {
  msg: string;
  indLoading = false;
  entityFrm: FormGroup;
   dbops: DBOperation;
   modalTitle: string;
   modalBtnTitle: string;
  listFilter: string;
  selectedOption: string;
   entity: IEntity;
  // genders = [];
  // technologies = [];
  activeOptions = [];
  registeredOptions = [];
  states = [];
  countries = [];
  areas = [];
  cities = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _stateService: StateService,
    private _cityService: CityService,
    private _areaService: AreaService,
    private _countryService: CountryService,
    private _entityService: EntityService,

    public dialogRef: MatDialogRef<EntitylistComponent>) { }

  ngOnInit() {
    // built state form
    this.entityFrm = this.fb.group({
      EntityID: [''],
      Description: ['', [Validators.required]],
      Name: ['', [Validators.required, Validators.maxLength(250)]],
      FirstName: ['', [Validators.required]],
      MiddleName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      NickName: ['', [Validators.required]],
      EntityType: ['', [Validators.required]],
      RegisteredAddress: ['', [Validators.required]],
      RegisteredCountryID: ['', [Validators.required]],
      RegisteredStateID: ['', [Validators.required]],
      RegisteredCityID: ['', [Validators.required]],
      RegisteredAreaID: ['', [Validators.required]],
      EmailAddress: ['', [Validators.required]],
      WebsiteAddress: ['', [Validators.required]],
      FacebookAddress: ['', [Validators.required]],
      YouTubeAddress: ['', [Validators.required]],
      TwitterAddress: ['', [Validators.required]],
      GooglePlusAddress: ['', [Validators.required]],
      IsActive: ['', [Validators.required]],
      IsRegistered: ['', [Validators.required]],

         });
    // this.genders = Global.genders;
    // this.technologies = Global.technologies;
    this.activeOptions = Global.activeOptions;
    this.registeredOptions =  Global.registeredOptions;

    this._countryService.getAllCountry(Global.BASE_USER_ENDPOINT + 'Country/' + 'getAllCountry')
    .subscribe(countries => {
      this.countries = countries;
    });

    this._stateService.getAllState(Global.BASE_USER_ENDPOINT + 'State/' + 'getAllState')
    .subscribe(states => {
      this.states = states;
    });

    this._cityService.getAllCity(Global.BASE_USER_ENDPOINT + 'City/' + 'getAllCity')
    .subscribe(cities => {
      this.cities = cities;
    });

    this._areaService.getAllArea(Global.BASE_USER_ENDPOINT + 'Area/' + 'getAllArea')
    .subscribe(areas => {
      this.areas = areas;
    });



    // subscribe on value changed event of form to show validation message
    this.entityFrm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();

    if (this.data.dbops === DBOperation.create) {
      this.entityFrm.reset();
    } else {
      this.entityFrm.setValue(this.data.entity);
    }
    this.SetControlsState(this.data.dbops === DBOperation.delete ? false : true);
  }
  // form value change event
  onValueChanged(data?: any) {
    if (!this.entityFrm) { return; }
    const form = this.entityFrm;
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
      'Name': '',
      'Description': '',
      'FirstName': '',
      'MiddleName': '',
      'LastName': '',
      'NickName': '',
      'EntityType': '',
      'RegisteredAddress': '',
      'RegisteredCountryID': '',
      'RegisteredStateID': '',
      'RegisteredCityID': '',
      'RegisteredAreaID': '',
      'EmailAddress': '',
      'WebsiteAddress': '',
      'FacebookAddress': '',
      'YouTubeAddress': '',
      'TwitterAddress': '',
      'GooglePlusAddress': '',
      'IsActive': '',
      'IsRegistered':''
  };
  // custom valdiation messages
  // tslint:disable-next-line:member-ordering
  validationMessages = {
    'Name': {
      'maxlength': 'Name cannot be more than 50 characters long.',
      'required': 'Name is required.'
    },
    'Description': {
      'maxlength': 'Description cannot be more than 50 characters long.',
      'required': 'Description is required.'
    },
    'FirstName': {
      'maxlength': 'FirstName cannot be more than 50 characters long.',
      'required': 'FirstName is required.'
    },
    'MiddleName': {
      'maxlength': 'MiddleName cannot be more than 50 characters long.',
      'required': 'MiddleName is required.'
    },
    'LastName': {
      'maxlength': 'LastName cannot be more than 50 characters long.',
      'required': 'LastName is required.'
    },
    'NickName': {
      'maxlength': 'NickName cannot be more than 50 characters long.',
      'required': 'NickName is required.'
    },
    'EntityType': {
      'maxlength': 'EntityType cannot be more than 50 characters long.',
      'required': 'EntityType is required.'
    },
    'RegisteredAddress': {
      'maxlength': 'RegisteredAddress cannot be more than 50 characters long.',
      'required': 'RegisteredAddress is required.'
    },
    'RegisteredCountryID': {
      'maxlength': 'RegisteredCountryID cannot be more than 50 characters long.',
      'required': 'RegisteredCountryID is required.'
    },
    'RegisteredStateID': {
      'maxlength': 'RegisteredStateID cannot be more than 50 characters long.',
      'required': 'RegisteredStateID is required.'
    },
    'RegisteredCityID': {
      'maxlength': 'RegisteredCityID cannot be more than 50 characters long.',
      'required': 'RegisteredCityID is required.'
    },
    'RegisteredAreaID': {
      'maxlength': 'RegisteredAreaID cannot be more than 50 characters long.',
      'required': 'RegisteredAreaID is required.'
    },
    'EmailAddress': {
      'maxlength': 'EmailAddress cannot be more than 50 characters long.',
      'required': 'EmailAddress is required.'
    },
    'WebsiteAddress': {
      'maxlength': 'WebsiteAddress cannot be more than 50 characters long.',
      'required': 'WebsiteAddress is required.'
    },
    'FacebookAddress': {
      'maxlength': 'FacebookAddress cannot be more than 50 characters long.',
      'required': 'FacebookAddress is required.'
    },
    'YouTubeAddress': {
      'maxlength': 'YouTubeAddress cannot be more than 50 characters long.',
      'required': 'YouTubeAddress is required.'
    },
    'TwitterAddress': {
      'maxlength': 'TwitterAddress cannot be more than 50 characters long.',
      'required': 'TwitterAddress is required.'
    },
    'GooglePlusAddress': {
      'maxlength': 'GooglePlusAddress cannot be more than 50 characters long.',
      'required': 'GooglePlusAddress is required.'
    },
    'IsActive': {
      'maxlength': 'IsActive cannot be more than 50 characters long.',
      'required': 'IsActive is required.'
    },
    'IsRegistered': {
      'maxlength': 'IsRegistered cannot be more than 50 characters long.',
      'required': 'IsRegistered is required.'
    }
  };
  onSubmit(formData: any) {
     const entityData = this.mapEntityID(formData.value);
    switch (this.data.dbops) {
      case DBOperation.create:
             this._entityService.addEntity(Global.BASE_USER_ENDPOINT + 'Entity/' + 'addEntity', entityData).subscribe(
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
        this._entityService.updateEntity(Global.BASE_USER_ENDPOINT + 'Entity/' + 'updateEntity', entityData.EntityID, entityData).subscribe(
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
        this._entityService.deleteEntity(Global.BASE_USER_ENDPOINT + 'Entity/' + 'deleteEntity', entityData.EntityID).subscribe(
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
    isEnable ? this.entityFrm.enable() : this.entityFrm.disable();
  }

    mapEntityID(entity: IEntity): IEntity {
    if (entity.EntityID == null)    {
      entity.EntityID = -1;  }
    return entity;
  }
}
