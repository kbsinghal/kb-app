import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

import { EventOrganizerformComponent } from '../eventorganizerform/eventorganizerform.component';

import { EventOrganizerService } from '../services/eventorganizer.service';
import { IEventOrganizer } from '../model/eventorganizer';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
  selector: 'app-eventorganizerlist',
  templateUrl: './eventorganizerlist.component.html',
  styleUrls: ['./eventorganizerlist.component.css']
})
export class EventOrganizerlistComponent implements OnInit {
  eventorganizers: IEventOrganizer[];
  eventorganizer: IEventOrganizer;
  loadingState: boolean;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;

  // set columns that will need to show in listing table
  displayedColumns = ['EventID', 'EventName','EntityList', 'action'];
  // setting up datasource for material table
  dataSource = new MatTableDataSource<IEventOrganizer>();

  constructor(public snackBar: MatSnackBar, private _eventOrganizerService: EventOrganizerService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadingState = true;
    this.loadEventOrganizers();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EventOrganizerformComponent, {
      width: '500px',
      data: {dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, eventorganizer: this.eventorganizer}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      if (result === 'success') {
        this.loadingState = true;
        this.loadEventOrganizers();
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

  loadEventOrganizers(): void {
    this._eventOrganizerService.getAllEventOrganizer(Global.BASE_USER_ENDPOINT + 'EventOrganizer/' + 'getAllEventOrganizer')
    .subscribe(eventorganizers => {
    this.loadingState = false;
    this.dataSource.data = eventorganizers;
    });
  }

  getGender(gender: number): string {
    return Global.genders.filter(ele => ele.id === gender).map(ele => ele.name)[0];
  }

  addEventOrganizer() {
    this.dbops = DBOperation.create;
    this.modalTitle = 'Add New Event Organizer';
    this.modalBtnTitle = 'Add';
    this.openDialog();
  }
  editEventOrganizer(id: number) {
     console.log('id:' + id);
    this.dbops = DBOperation.update;
    this.modalTitle = 'Edit Event Organizer';
    this.modalBtnTitle = 'Update';
    this.eventorganizer = this.dataSource.data.filter(x => x.EventID === id)[0];
     console.log('this.eventorganizer');
     console.log(this.eventorganizer);
    this.openDialog();
  }
  deleteEventOrganizer(id: number) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Confirm to Delete ?';
    this.modalBtnTitle = 'Delete';
    this.eventorganizer = this.dataSource.data.filter(x => x.EventID === id)[0];
    this.openDialog();
  }
  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
}

