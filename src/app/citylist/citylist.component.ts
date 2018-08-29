import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CityformComponent } from '../cityform/cityform.component';

import { CityService } from '../services/city.service';
import { ICity } from '../model/city';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css']
})
export class CitylistComponent implements OnInit {
  cities: ICity[];
  city: ICity;
  loadingState: boolean;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;

  // set columns that will need to show in listing table
  displayedColumns = ['CityID', 'CityName', 'StateID', 'action'];
  // setting up datasource for material table
  dataSource = new MatTableDataSource<ICity>();

  constructor(public snackBar: MatSnackBar, private _cityService: CityService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadingState = true;
    this.loadCities();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CityformComponent, {
      width: '500px',
      data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, city: this.city }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      if (result === 'success') {
        this.loadingState = true;
        this.loadCities();
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

  loadCities(): void {
    // console.log(Global.BASE_USER_ENDPOINT + 'City/' + 'getAllCity');
    this._cityService.getAllCity(Global.BASE_USER_ENDPOINT + 'City/' + 'getAllCity')
    .subscribe(cities => {
    this.loadingState = false;
    this.dataSource.data = cities;
    });
  }

  getGender(gender: number): string {
    return Global.genders.filter(ele => ele.id === gender).map(ele => ele.name)[0];
  }

  addCity() {
    this.dbops = DBOperation.create;
    this.modalTitle = 'Add New City';
    this.modalBtnTitle = 'Add';
    this.openDialog();
  }
  editCity(id: number) {
    console.log('id:' + id);
    this.dbops = DBOperation.update;
    this.modalTitle = 'Edit City';
    this.modalBtnTitle = 'Update';
    this.city = this.dataSource.data.filter(x => x.CityID === id)[0];
    console.log('this.city');
    console.log(this.city);
    this.openDialog();
  }
  deleteCity(id: number) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Confirm to Delete ?';
    this.modalBtnTitle = 'Delete';
    this.city = this.dataSource.data.filter(x => x.CityID === id)[0];
    this.openDialog();
  }
  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
}

