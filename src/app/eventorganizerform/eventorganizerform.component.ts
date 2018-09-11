import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, AUTOCOMPLETE_PANEL_HEIGHT } from '@angular/material';

import { EventOrganizerlistComponent } from '../eventorganizerlist/eventorganizerlist.component';

import { IEvent } from '../model/event';
import { IEntity } from '../model/entity';
import { IEventOrganizer } from '../model/eventorganizer';
import { EventService } from '../services/event.service';
import { EntityService } from '../services/entity.service';
import { EventOrganizerService } from '../services/eventorganizer.service';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
  selector: 'app-eventorganizerform',
  templateUrl: './eventorganizerform.component.html',
  styleUrls: ['./eventorganizerform.component.css']
})

export class EventOrganizerformComponent implements OnInit {
  msg: string;
  indLoading = false;
  eventOrganizerFrm: FormGroup;
   dbops: DBOperation;
   modalTitle: string;
   modalBtnTitle: string;
  listFilter: string;
  selectedOption: string;
   eventOrganizer: IEventOrganizer;
  // genders = [];
  // technologies = [];
  events = [];
  entities = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _eventOrganizerService: EventOrganizerService,
    private _eventService: EventService,
    private _entityService: EntityService,
    public dialogRef: MatDialogRef<EventOrganizerlistComponent>) { }

  ngOnInit() {
    // built state form
    this.eventOrganizerFrm = this.fb.group({
      EventOrganizerID: [''],
     // AreaName: ['', [Validators.required, Validators.maxLength(250)]],
      EventID: ['', [Validators.required]],
      EntityIDs: ['', [Validators.required]],
      EntityList: ['', [Validators.required]],
      EventName: ['', [Validators.required]],
      CreatedBy: ['', [Validators.required]],
      UpdatedBy: ['', [Validators.required]],
      CreatedOn: ['', [Validators.required]],
      UpdatedOn: ['', [Validators.required]],

         });
    // this.genders = Global.genders;
    // this.technologies = Global.technologies;


    this._eventService.getAllEvent(Global.BASE_USER_ENDPOINT + 'Event/' + 'getAllEvent')
    .subscribe(events => {
      this.events = events;
    });

    this._entityService.getAllEntity(Global.BASE_USER_ENDPOINT + 'Entity/' + 'getAllEntity')
    .subscribe(entities => {
      this.entities = entities;
    });



    // subscribe on value changed event of form to show validation message
    this.eventOrganizerFrm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();

    if (this.data.dbops === DBOperation.create) {
      this.eventOrganizerFrm.reset();
    } else {
      console.log('hi');
      console.log(this.data.eventOrganizer);
      console.log(this.data.eventorganizer);
      // console.log(eventOrganizer);
       this.eventOrganizerFrm.setValue(this.data.eventorganizer);
    }
    this.SetControlsState(this.data.dbops === DBOperation.delete ? false : true);
  }
  // form value change event
  onValueChanged(data?: any) {
    if (!this.eventOrganizerFrm) { return; }
    const form = this.eventOrganizerFrm;
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
    'EventID': '',
    'EntityIDs': '',
    'EntityList': '',
    'EventName': '',
    'CreatedBy': '',
    'UpdatedBy': '',
    'CreatedOn': '',
    'UpdatedOn': ''
  };
  // custom valdiation messages
  // tslint:disable-next-line:member-ordering
  validationMessages = {
    'EventID': {
      'maxlength': 'EventID cannot be more than 50 characters long.',
      'required': 'EventID is required.'
    },
    'EntityIDs': {
      'maxlength': 'EntityIDs cannot be more than 50 characters long.',
      'required': 'EntityIDs is required.'
    },
    'EventName': {
      'maxlength': 'EventName cannot be more than 50 characters long.',
      'required': 'EventName is required.'
    }

  };
  onSubmit(formData: any) {
     const eventOrganizerData = this.mapEventOrganizerID(formData.value);
    switch (this.data.dbops) {
      case DBOperation.create:
             this._eventOrganizerService.addEventOrganizer(Global.BASE_USER_ENDPOINT + 'EventOrganizer/' + 'addEventOrganizer', eventOrganizerData).subscribe(
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
        this._eventOrganizerService.updateEventOrganizer(Global.BASE_USER_ENDPOINT + 'EventOrganizer/' + 'updateEventOrganizer', eventOrganizerData.EventOrganizerID, eventOrganizerData).subscribe(
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
        this._eventOrganizerService.deleteEventOrganizer(Global.BASE_USER_ENDPOINT + 'EventOrganizer/' + 'deleteEventOrganizer', eventOrganizerData.EventOrganizerID).subscribe(
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
    isEnable ? this.eventOrganizerFrm.enable() : this.eventOrganizerFrm.disable();
  }

    mapEventOrganizerID(eventOrganizer: IEventOrganizer): IEventOrganizer {
    if (eventOrganizer == null || eventOrganizer.EventOrganizerID == null)    {
      eventOrganizer.EventOrganizerID = -1;  }
    return eventOrganizer;
  }
}
