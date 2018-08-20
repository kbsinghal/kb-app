import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, AUTOCOMPLETE_PANEL_HEIGHT } from '@angular/material';

import { EventlistComponent } from '../eventlist/eventlist.component';

import { IEvent } from '../model/event';
import { EventService } from '../services/event.service';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
  selector: 'app-eventform',
  templateUrl: './eventform.component.html',
  styleUrls: ['./eventform.component.css']
})

export class EventformComponent implements OnInit {
  msg: string;
  indLoading = false;
  eventFrm: FormGroup;
   dbops: DBOperation;
   modalTitle: string;
   modalBtnTitle: string;
  listFilter: string;
  selectedOption: string;
   event: IEvent;
  genders = [];
  technologies = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _eventService: EventService,
    public dialogRef: MatDialogRef<EventlistComponent>) { }

  ngOnInit() {
    // built event form
    this.eventFrm = this.fb.group({
      EventID: [-1],
      EventName: ['', [Validators.required, Validators.maxLength(250)]],
      EventDescription: ['', [Validators.required, Validators.maxLength(500)]],
      EventAddress: ['', [Validators.required, Validators.maxLength(250)]],
      // email: ['', [Validators.required, Validators.email]],
      // gender: ['', [Validators.required]],
      EventStartDate: ['', [Validators.required]],
      EventEndDate: ['', [Validators.required]],
      EventStartTime: ['', [Validators.required]],
      EventEndTime: ['', [Validators.required]],
      EventVenueLatitude: ['', [Validators.required]],
      EventVenueLongitude: ['', [Validators.required]],
      CountryID: ['', [Validators.required]],
      StateID: ['', [Validators.required]],
      CityID: ['', [Validators.required]],
      AreaID: ['', [Validators.required]],
      IsActive: ['', [Validators.required]]
         });
    // this.genders = Global.genders;
    // this.technologies = Global.technologies;

    // subscribe on value changed event of form to show validation message
    this.eventFrm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();

    if (this.data.dbops === DBOperation.create) {
      this.eventFrm.reset();
    } else {
      this.eventFrm.setValue(this.data.event);
    }
    this.SetControlsState(this.data.dbops === DBOperation.delete ? false : true);
  }
  // form value change event
  onValueChanged(data?: any) {
    if (!this.eventFrm) { return; }
    const form = this.eventFrm;
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
    'EventName': '',
    'EventDescription': '',
    'EventAddress': '',
    'EventStartDate': '',
    'EventEndDate': '',
    'EventStartTime': '',
    'EventEndTime': '',
    'EventVenueLatitude': '',
    'EventVenueLongitude': '',
    'CountryID': '',
    'StateID': '',
    'CityID': '',
    'AreaID': '',
    'IsActive': ''
  };
  // custom valdiation messages
  // tslint:disable-next-line:member-ordering
  validationMessages = {
    'EventName': {
      'maxlength': 'eventname cannot be more than 50 characters long.',
      'required': 'eventname is required.'
    },
    'EventDescription': {
      'maxlength': 'eventdescription cannot be more than 50 characters long.',
      'required': 'eventdescription is required.'
    },
    'EventAddress': {
      'maxlength': 'EventAddress cannot be more than 50 characters long.',
      'required': 'EventAddress is required.'
    },
    // 'email': {
    //   'email': 'Invalid email format.',
    //   'required': 'Email is required.'
    // },
    // 'gender': {
    //   'required': 'Gender is required.'
    // },
    // 'techno': {
    //   'required': 'Technology is required.'
    // },
    'EventStartDate': {
      'required': 'eventstartdate is required.'
    },
    'EventEndDate': {
      'required': 'eventenddate is required.'
    },
    'EventStartTime': {
      'required': 'eventstartdate is required.'
    },
    'EventEndTime': {
      'required': 'eventstartdate is required.'
    },
    'EventVenueLatitude': {
      'required': 'eventstartdate is required.'
    },
    'EventVenueLongitude': {
      'required': 'eventstartdate is required.'
    },
    'CountryID': {
      'required': 'eventstartdate is required.'
    },
    'StateID': {
      'required': 'eventstartdate is required.'
    },
    'CityID': {
      'required': 'eventstartdate is required.'
    },
    'AreaID': {
      'required': 'eventstartdate is required.'
    },
    'IsActive': {
      'required': 'eventstartdate is required.'
    }

  };
  onSubmit(formData: any) {
     const eventData = this.mapDateData(this.mapEventID(formData.value));
    switch (this.data.dbops) {
      case DBOperation.create:
     
        this._eventService.addEvent(Global.BASE_USER_ENDPOINT + 'addEvent', eventData).subscribe(
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
        this._eventService.updateEvent(Global.BASE_USER_ENDPOINT + 'updateEvent', eventData.EventID, eventData).subscribe(
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
        this._eventService.deleteEvent(Global.BASE_USER_ENDPOINT + 'deleteEvent', eventData.EventID).subscribe(
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
    isEnable ? this.eventFrm.enable() : this.eventFrm.disable();
  }

  mapDateData(event: IEvent): IEvent {
    event.EventStartDate = new Date(event.EventStartDate).toISOString();
    event.EventEndDate = new Date(event.EventEndDate).toISOString();
      
    return event;
  }

  mapEventID(event: IEvent): IEvent {
    if (event.EventID == null)
    {
      event.EventID = -1; 
    }
    return event;
  }
}
