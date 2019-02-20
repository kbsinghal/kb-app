import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { EventBannerformComponent } from '../eventbannerform/eventbannerform.component';

import { EventBannerService } from '../services/eventbanner.service';
import { IEventBanner } from '../model/eventbanner';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
  selector: 'app-eventbannerlist',
  templateUrl: './eventbannerlist.component.html',
  styleUrls: ['./eventbannerlist.component.css']
})
export class EventBannerlistComponent implements OnInit {
  eventbanners: IEventBanner[];
  eventbanner: IEventBanner;
  loadingState: boolean;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;

  // set columns that will need to show in listing table
  // displayedColumns = ['name', 'email', 'gender', 'birth', 'techno', 'message', 'action'];
  displayedColumns = ['EventID', 'EventName', 'action'];
   // setting up datasource for material table
  dataSource = new MatTableDataSource<IEventBanner>();

  constructor(public snackBar: MatSnackBar, private _eventbannerService: EventBannerService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadingState = true;
    this.loadEventBanners();
  }
  openDialog(): void {
    debugger
    const dialogRef = this.dialog.open(EventBannerformComponent, {
      width: '500px',
      data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, event: this.eventbanner }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      if (result === 'success') {
        this.loadingState = true;
        this.loadEventBanners();
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

  loadEventBanners(): void {
    this._eventbannerService.getAllEventBanner(Global.BASE_USER_ENDPOINT + 'EventBanner/' + 'getAllEventBanner')
    .subscribe(eventbanners => {
    this.loadingState = false;
    this.dataSource.data = eventbanners;
    });
  }

  getGender(gender: number): string {
    return Global.genders.filter(ele => ele.id === gender).map(ele => ele.name)[0];
  }

  addEventBanner() {
    this.dbops = DBOperation.create;
    this.modalTitle = 'Add New Event Banner';
    this.modalBtnTitle = 'Add';
    this.openDialog();
  }
  editEventBanner(id: number) {
    debugger
    this.dbops = DBOperation.update;
    this.modalTitle = 'Edit Event Banner';
    this.modalBtnTitle = 'Update';
    this.eventbanner = this.dataSource.data.filter(x => x.EventID === id)[0];
    this.openDialog();
  }
  deleteEventBanner(id: number) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Confirm to Delete ?';
    this.modalBtnTitle = 'Delete';
    this.eventbanner = this.dataSource.data.filter(x => x.EventID === id)[0];
    this.openDialog();
  }
  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
}

