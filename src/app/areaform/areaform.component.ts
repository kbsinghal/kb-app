import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, AUTOCOMPLETE_PANEL_HEIGHT } from '@angular/material';

import { ArealistComponent } from '../arealist/arealist.component';

import { ICity } from '../model/city';
import { IArea } from '../model/area';
import { CityService } from '../services/city.service';
import { AreaService } from '../services/area.service';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
  selector: 'app-areaform',
  templateUrl: './areaform.component.html',
  styleUrls: ['./areaform.component.css']
})

export class AreaformComponent implements OnInit {
  msg: string;
  indLoading = false;
  areaFrm: FormGroup;
   dbops: DBOperation;
   modalTitle: string;
   modalBtnTitle: string;
  listFilter: string;
  selectedOption: string;
   area: IArea;
  // genders = [];
  // technologies = [];
  cities = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _areaService: AreaService,
    private _cityService: CityService,
    public dialogRef: MatDialogRef<ArealistComponent>) { }

  ngOnInit() {
    // built state form
    this.areaFrm = this.fb.group({
      AreaID: [''],
      AreaName: ['', [Validators.required, Validators.maxLength(250)]],
      CityID: ['', [Validators.required]]
         });
    // this.genders = Global.genders;
    // this.technologies = Global.technologies;


    this._cityService.getAllCity(Global.BASE_USER_ENDPOINT + 'City/' + 'getAllCity')
    .subscribe(cities => {
      this.cities = cities;
    });



    // subscribe on value changed event of form to show validation message
    this.areaFrm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();

    if (this.data.dbops === DBOperation.create) {
      this.areaFrm.reset();
    } else {
      this.areaFrm.setValue(this.data.area);
    }
    this.SetControlsState(this.data.dbops === DBOperation.delete ? false : true);
  }
  // form value change event
  onValueChanged(data?: any) {
    if (!this.areaFrm) { return; }
    const form = this.areaFrm;
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
    'AreaName': '',
    'CityID': '',
  };
  // custom valdiation messages
  // tslint:disable-next-line:member-ordering
  validationMessages = {
    'AreaName': {
      'maxlength': 'AreaName cannot be more than 50 characters long.',
      'required': 'AreaName is required.'
    },
    'CityID': {
      'maxlength': 'CityID cannot be more than 50 characters long.',
      'required': 'CityID is required.'
    }
  };
  onSubmit(formData: any) {
     const areaData = this.mapAreaID(formData.value);
    switch (this.data.dbops) {
      case DBOperation.create:
             this._areaService.addArea(Global.BASE_USER_ENDPOINT + 'Area/' + 'addArea', areaData).subscribe(
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
        this._areaService.updateArea(Global.BASE_USER_ENDPOINT + 'Area/' + 'updateArea', areaData.AreaID, areaData).subscribe(
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
        this._areaService.deleteArea(Global.BASE_USER_ENDPOINT + 'Area/' + 'deleteArea', areaData.AreaID).subscribe(
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
    isEnable ? this.areaFrm.enable() : this.areaFrm.disable();
  }

    mapAreaID(area: IArea): IArea {
    if (area.AreaID == null)    {
      area.AreaID = -1;  }
    return area;
  }
}
