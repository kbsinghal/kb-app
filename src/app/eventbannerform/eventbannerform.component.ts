import { Component, OnInit, Inject } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatSnackBar } from '@angular/material';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, AUTOCOMPLETE_PANEL_HEIGHT } from '@angular/material';

import { EventBannerlistComponent } from '../eventbannerlist/eventbannerlist.component';

import { IEvent } from '../model/event';
import { IEventBanner } from '../model/eventbanner';

import { EventService } from '../services/event.service';
import { EventBannerService } from '../services/eventbanner.service';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

const URL = Global.BASE_USER_ENDPOINT + '/EventBanner/addEventBanner';

@Component({
  selector: 'app-eventbannerform',
  templateUrl: './eventbannerform.component.html',
  styleUrls: ['./eventbannerform.component.css']
})

export class EventBannerformComponent implements OnInit {
  msg: string;
  indLoading = false;
  eventbannerFrm: FormGroup;
   dbops: DBOperation;
   modalTitle: string;
   modalBtnTitle: string;
  listFilter: string;
  selectedOption: string;
   event: IEvent;
   eventbanner: IEventBanner;
   file: File;
   //files: FileList;
   //selectedFile: File;
   //fileList: File[];

   events = [];
   //files = [];
   eventbanners = [];
   //fileList = [];
   files: any = [];
   //files = []FileList;
   

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _eventService: EventService,
    private _eventbannerService: EventBannerService,
    public dialogRef: MatDialogRef<EventBannerlistComponent>) { }

    //public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'}); //KB Upload

  ngOnInit() {
    // built event form
    this.eventbannerFrm = this.fb.group({
      EventBannerID: [-1],
      EventID: ['', [Validators.required, Validators.maxLength(250)]],
      Banner: [''],
      UserID: [-1]
         });
    
    
      this._eventService.getAllEvent(Global.BASE_USER_ENDPOINT + 'Event/' + 'getAllEvent')
       .subscribe(events => {
         this.events = events;
      });

      //this.files = [];
      // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; }; //Kb Upload
      // this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      //      console.log('ImageUpload:uploaded:', item, status, response);
      //      alert('File uploaded successfully');
      //  };

    
      

    
    // subscribe on value changed event of form to show validation message
    this.eventbannerFrm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();

    if (this.data.dbops === DBOperation.create) {
      this.eventbannerFrm.reset();
    } else {
      this.eventbannerFrm.setValue(this.data.eventbanner);
    }
    this.SetControlsState(this.data.dbops === DBOperation.delete ? false : true);
  }

  // addBanner(event) {
  //   //eventbanner.Banner = event.target.file;
  //   //eventbanner.EventID=1;
  //   console.log('eventbanner.Banner: ' + event.target.file);
  //   console.log('eventbanner.EventID: 1');

  // }
  

  onFileChanged(event) {
    debugger
    //this.selectedFile = event.target.files[0];

    //let eventbanner: IEventBanner=new IEventBanner();
    
    //this.fileList.push(event.target.files[0]);

    this.files.push(event.target.files[0]);

    console.log(this.files)

    this.eventbanner.EventID = 1;
    this.eventbanner.Banner = event.target.files[0];

    console.log(this.eventbanner)

    this.eventbanners.push(this.eventbanner);
    console.log('this.eventbanners:   '+ this.eventbanners)
    //console.log('this.selectedFile: ' + event.target.files[0]);
    //console.log('eventbanner.EventID: 1');

    //console.log('this.eventbanner.EventID:1');
    //console.log('this.eventbanner.Banner' + event.target.files[0]);

    //console.log('this.fileList: ' + this.fileList);

    //this.formData

  }

  fileChange(event) {
    //let fileList: FileList = event.target.files;
    // if(fileList.length > 0) {
    //     let file: File = fileList[0];
    //     let formData:FormData = new FormData();
    //     formData.append('uploadFile', file, file.name);
    //     let headers = new Headers();
    //     /** In Angular 5, including the header Content-Type can invalidate your request */
    //     headers.append('Content-Type', 'multipart/form-data');
    //     headers.append('Accept', 'application/json');
    //     let options = new RequestOptions({ headers: headers });
    //     this.http.post(`${this.apiEndPoint}`, formData, options)
    //         .map(res => res.json())
    //         .catch(error => Observable.throw(error))
    //         .subscribe(
    //             data => console.log('success'),
    //             error => console.log(error)
    //         )
    // }
}
  // form value change event
  onValueChanged(data?: any) {
    if (!this.eventbannerFrm) { return; }
    const form = this.eventbannerFrm;
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
    'Banner': '',
  };
  // custom valdiation messages
  // tslint:disable-next-line:member-ordering
  validationMessages = {
    'EventID': {
      'maxlength': 'EventID cannot be more than 50 characters long.',
      'required': 'EventID is required.'
    },
    'Banner': {
      'maxlength': 'Banner cannot be more than 50 characters long.',
      'required': 'Banner is required.'
    }
  };
  onSubmit(formData: any) {
     //const eventData = this.mapDateData(this.mapEventID(formData.value));
     //const eventbannerData = this.mapEventBannerID(formData.value);
     const formData1 = this.mapEventBannerID(formData.value);
     

   
     

     //console.log('eventbannerData.Banner' + eventbannerData.Banner);

    switch (this.data.dbops) {
      case DBOperation.create:
      this._eventbannerService.addEventBanner(Global.BASE_USER_ENDPOINT + 'EventBanner/' + 'addEventBanner', 2 , this.files).subscribe(  
      //this._eventbannerService.addEventBanner(Global.BASE_USER_ENDPOINT + 'EventBanner/' + 'addEventBanner', eventbannerData).subscribe(
          //this._eventbannerService.addEventBanner(Global.BASE_USER_ENDPOINT + 'EventBanner/' + 'addEventBanner', eventbannerData.EventID, this.files).subscribe(  
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
      // case DBOperation.update:
      //   this._eventbannerService.updateEventBanner(Global.BASE_USER_ENDPOINT + 'EventBanner/' + 'updateEventBanner', eventbannerData.EventID, eventbannerData).subscribe(
      //     data => {
      //       // Success
      //       if (data.message) {
      //         this.dialogRef.close('success');
      //       } else {
      //         this.dialogRef.close('error');
      //       }
      //     },
      //     error => {
      //       this.dialogRef.close('error');
      //     }
      //   );
      //   break;
      // case DBOperation.delete:
      //   this._eventbannerService.deleteEventBanner(Global.BASE_USER_ENDPOINT + 'EventBanner/' + 'deleteEventBanner', eventbannerData.EventID).subscribe(
      //     data => {
      //       // Success
      //       if (data.message) {
      //         this.dialogRef.close('success');
      //       } else {
      //         this.dialogRef.close('error');
      //       }
      //     },
      //     error => {
      //       this.dialogRef.close('error');
      //     }
      //   );
      //   break;
    }
  }
  SetControlsState(isEnable: boolean) {
    isEnable ? this.eventbannerFrm.enable() : this.eventbannerFrm.disable();
  }

  // mapDateData(event: IEvent): IEvent {
  //   event.EventStartDate = new Date(event.EventStartDate).toISOString();
  //   event.EventEndDate = new Date(event.EventEndDate).toISOString();
  //   return event;
  // }

  //mapEventBannerID(eventbanner: IEventBanner): IEventBanner {
  mapEventBannerID(eventbanner: IEventBanner): FormData {
    debugger;
    console.log('in function');
    eventbanner.Banner = this.files; // uploaded files

  //   for (const file of this.files) {
  //     eventbanner.append(name, file, file.name);
  // }
  const formData2 = new FormData();

  formData2.append('eventbanner', JSON.stringify(eventbanner));  
                for (let i = 0; i < this.files.length; i++) {  
                  formData2.append('file' + i, this.files[i]);  
                }  

  
  // for (const file of this.files) {
  //     formData2.append(name, file, file.name);
  // }
   //var count = 0;
  //for (let count = 0; count <= this.files.length - 1 ; count++) {
    //  formData2.append('file' + count, this.files[count], this.files[count].name);
  //}


    console.log('eventbanner.Banner' + eventbanner.Banner);
    console.log('eventbanner' + eventbanner);
    console.log('out function');
    if (eventbanner.EventBannerID == null) {
      eventbanner.EventBannerID = -1;
      eventbanner.UserID = 1;
      eventbanner.EventName = '';
      
    }
    //return eventbanner;
    return formData2;
  }
}
