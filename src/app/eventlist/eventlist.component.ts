import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { EventformComponent } from '../eventform/eventform.component';

import { EventService } from '../services/event.service';
import { IEvent } from '../model/event';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {
  events: IEvent[];
  event: IEvent;
  loadingState: boolean;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;

  // set columns that will need to show in listing table
  // displayedColumns = ['name', 'email', 'gender', 'birth', 'techno', 'message', 'action'];
  displayedColumns = ['EventID','EventName', 'EventDescription', 'EventAddress', 'EventStartDate', 'EventEndDate','action'];
  
  // setting up datasource for material table
  dataSource = new MatTableDataSource<IEvent>();

  constructor(public snackBar: MatSnackBar, private _eventService: EventService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadingState = true;
    this.loadEvents();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EventformComponent, {
      width: '500px',
      data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, event: this.event }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'success') {
        this.loadingState = true;
        this.loadEvents();
        switch (this.dbops) {
          case DBOperation.create:
            this.showMessage('Data successfully added.');
            break;
          case DBOperation.update:
            this.showMessage('Data successfully updated.');
            break;
          case DBOperation.delete:
            this.showMessage('Data successfully deleted.');
            break;
        }
      } else if (result === 'error') {
        this.showMessage('There is some issue in saving records, please contact to system administrator!');
      } else {
        this.showMessage('Please try again, something went wrong');
      }
    });
  }

  loadEvents(): void {
    this._eventService.getAllEvent(Global.BASE_USER_ENDPOINT + 'getAllEvent')
    
    //this._eventService.events(Global.BASE_USER_ENDPOINT + 'events')
      .subscribe(events => {
        this.loadingState = false;
        this.dataSource.data = events;
        console.log(Global.BASE_USER_ENDPOINT + 'getAllEvent')
        //console.log(this.dataSource.data);
      });
  }

  getGender(gender: number): string {
    return Global.genders.filter(ele => ele.id === gender).map(ele => ele.name)[0];
  }

  addEvent() {
    this.dbops = DBOperation.create;
    this.modalTitle = 'Add New Event';
    this.modalBtnTitle = 'Add';
    this.openDialog();
  }
  editEvent(id: number) {
    this.dbops = DBOperation.update;
    this.modalTitle = 'Edit Event';
    this.modalBtnTitle = 'Update';
    this.event = this.dataSource.data.filter(x => x.EventID === id)[0];
    this.openDialog();
  }
  deleteEvent(id: number) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Confirm to Delete ?';
    this.modalBtnTitle = 'Delete';
    this.event = this.dataSource.data.filter(x => x.EventID === id)[0];
    this.openDialog();
  }
  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
}

