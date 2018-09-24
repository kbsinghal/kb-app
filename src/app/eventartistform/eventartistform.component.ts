import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, AUTOCOMPLETE_PANEL_HEIGHT } from '@angular/material';

import { EventArtistlistComponent } from '../eventartistlist/eventartistlist.component';

import { IEvent } from '../model/event';
import { IEntity } from '../model/entity';
import { IEventArtist } from '../model/eventartist';

import { EventService } from '../services/event.service';
import { EntityService } from '../services/entity.service';
import { EventArtistService } from '../services/eventartist.service';

import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
  selector: 'app-eventartistform',
  templateUrl: './eventartistform.component.html',
  styleUrls: ['./eventartistform.component.css']
})

export class EventArtistformComponent implements OnInit {
  msg: string;
  indLoading = false;
  eventartistFrm: FormGroup;
   dbops: DBOperation;
   modalTitle: string;
   modalBtnTitle: string;
  listFilter: string;
  selectedOption: string;
   eventartist: IEventArtist;
  // genders = [];
  // technologies = [];
  events = [];
  entities = [];
  YesNoOptions = [];


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _eventService: EventService,
    private _entityService: EntityService,
    private _eventartistService: EventArtistService,

    public dialogRef: MatDialogRef<EventArtistlistComponent>) { }

  ngOnInit() {
    // built event artist form
    this.eventartistFrm = this.fb.group({
      EventArtistID: [],
      EventID: [-1, [Validators.required]],
      ArtistID: [-1, [Validators.required]],
      EventName: [''],
      ArtistName: [''],
      StartTime: [''],
      EndTime: [''],
      UserID: [],
      IsActive: [],
      });
    // this.genders = Global.genders;
    // this.technologies = Global.technologies;

    this.YesNoOptions = Global.YesNoOptions;


    this._eventService.getAllEvent(Global.BASE_USER_ENDPOINT + 'Event/' + 'getAllEvent')
    .subscribe(events => {
      this.events = events;
    });

    this._entityService.getAllEntity(Global.BASE_USER_ENDPOINT + 'Entity/' + 'getAllEntity')
    .subscribe(entities => {
      this.entities = entities;
    });



    // subscribe on value changed event of form to show validation message
    this.eventartistFrm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();

    if (this.data.dbops === DBOperation.create) {
      this.eventartistFrm.reset();
    } else {
      this.eventartistFrm.setValue(this.data.eventartist);
    }
    this.SetControlsState(this.data.dbops === DBOperation.delete ? false : true);
  }
  // form value change event
  onValueChanged(data?: any) {
    if (!this.eventartistFrm) { return; }
    const form = this.eventartistFrm;
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
    'ArtistID': '',
  };
  // custom valdiation messages
  // tslint:disable-next-line:member-ordering
  validationMessages = {
    'EventID': {
      'maxlength': 'EventID cannot be more than 50 characters long.',
      'required': 'EventID is required.'
    },
    'ArtistID': {
      'maxlength': 'ArtistID cannot be more than 50 characters long.',
      'required': 'ArtistID is required.'
    }
  };
  onSubmit(formData: any) {
     const eventartistData = this.mapEventArtistID(formData.value);
    switch (this.data.dbops) {
      case DBOperation.create:
             this._eventartistService.addEventArtist(Global.BASE_USER_ENDPOINT + 'EventArtist/' + 'addEventArtist', eventartistData).subscribe(
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
        this._eventartistService.updateEventArtist(Global.BASE_USER_ENDPOINT + 'EventArtist/' + 'updateEventArtist', eventartistData.EventArtistID, eventartistData).subscribe(
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
        this._eventartistService.deleteEventArtist(Global.BASE_USER_ENDPOINT + 'EventArtist/' + 'deleteEventArtist', eventartistData.EventArtistID).subscribe(
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
    isEnable ? this.eventartistFrm.enable() : this.eventartistFrm.disable();
  }

  mapEventArtistID(eventartist: IEventArtist): IEventArtist {
    if (eventartist.EventArtistID == null)    {
      eventartist.EventArtistID = -1;
      eventartist.UserID = 1;
      eventartist.EventName = '';
      eventartist.ArtistName = '';
      // eventartist.StartTime = '';
      // eventartist.StartTime = '';
      // eventartist.IsActive = 0;
    }
    return eventartist;
  }
}
