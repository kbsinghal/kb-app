import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { StateformComponent } from '../stateform/stateform.component';

import { StateService } from '../services/state.service';
import { IState } from '../model/state';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
  selector: 'app-statelist',
  templateUrl: './statelist.component.html',
  styleUrls: ['./statelist.component.css']
})
export class StatelistComponent implements OnInit {
  states: IState[];
  state: IState;
  loadingState: boolean;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;

  // set columns that will need to show in listing table
  displayedColumns = ['StateID', 'StateName', 'CountryID', 'action'];
  // setting up datasource for material table
  dataSource = new MatTableDataSource<IState>();

  constructor(public snackBar: MatSnackBar, private _stateService: StateService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadingState = true;
    this.loadStates();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(StateformComponent, {
      width: '500px',
      data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, state: this.state }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      if (result === 'success') {
        this.loadingState = true;
        this.loadStates();
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

  loadStates(): void {
    this._stateService.getAllState(Global.BASE_USER_ENDPOINT + 'State/' + 'getAllState')
    .subscribe(states => {
    this.loadingState = false;
    this.dataSource.data = states;
    });
  }

  getGender(gender: number): string {
    return Global.genders.filter(ele => ele.id === gender).map(ele => ele.name)[0];
  }

  addState() {
    this.dbops = DBOperation.create;
    this.modalTitle = 'Add New State';
    this.modalBtnTitle = 'Add';
    this.openDialog();
  }
  editState(id: number) {
    this.dbops = DBOperation.update;
    this.modalTitle = 'Edit State';
    this.modalBtnTitle = 'Update';
    this.state = this.dataSource.data.filter(x => x.StateID === id)[0];
    this.openDialog();
  }
  deleteState(id: number) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Confirm to Delete ?';
    this.modalBtnTitle = 'Delete';
    this.state = this.dataSource.data.filter(x => x.StateID === id)[0];
    this.openDialog();
  }
  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
}

