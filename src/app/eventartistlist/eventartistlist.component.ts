import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { EventArtistformComponent } from '../eventartistform/eventartistform.component';

import { EventArtistService } from '../services/eventartist.service';
import { IEventArtist } from '../model/eventartist';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
  selector: 'app-eventartistlist',
  templateUrl: './eventartistlist.component.html',
  styleUrls: ['./eventartistlist.component.css']
})
export class EventArtistlistComponent implements OnInit {
  eventartists: IEventArtist[];
  eventartist: IEventArtist;
  loadingState: boolean;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;

  // set columns that will need to show in listing table
  displayedColumns = ['EventArtistID', 'EventID', 'EventName', 'ArtistID', 'ArtistName','action'];
  // setting up datasource for material table
  dataSource = new MatTableDataSource<IEventArtist>();

  constructor(public snackBar: MatSnackBar, private _eventartistService: EventArtistService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadingState = true;
    this.loadEventArtists();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EventArtistformComponent, {
      width: '500px',
      data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, eventartist: this.eventartist }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        this.loadingState = true;
        this.loadEventArtists();
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

  loadEventArtists(): void {
    this._eventartistService.getAllEventArtist(Global.BASE_USER_ENDPOINT + 'EventArtist/' + 'getAllEventArtist')
    .subscribe(states => {
    this.loadingState = false;
    this.dataSource.data = states;
    });
  }

  getGender(gender: number): string {
    return Global.genders.filter(ele => ele.id === gender).map(ele => ele.name)[0];
  }

  addEventArtist() {
    this.dbops = DBOperation.create;
    this.modalTitle = 'Add New EventArtist';
    this.modalBtnTitle = 'Add';
    this.openDialog();
  }
  editEventArtist(id: number) {
    this.dbops = DBOperation.update;
    this.modalTitle = 'Edit EventArtist';
    this.modalBtnTitle = 'Update';
    this.eventartist = this.dataSource.data.filter(x => x.EventArtistID === id)[0];
    this.openDialog();
  }
  deleteEventArtist(id: number) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Confirm to Delete ?';
    this.modalBtnTitle = 'Delete';
    this.eventartist = this.dataSource.data.filter(x => x.EventArtistID === id)[0];
    this.openDialog();
  }
  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
}

