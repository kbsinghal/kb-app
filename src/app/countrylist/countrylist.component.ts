import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CountryformComponent } from '../countryform/countryform.component';

import { CountryService } from '../services/country.service';
import { ICountry } from '../model/country';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {
  countries: ICountry[];
  country: ICountry;
  loadingState: boolean;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;

  // set columns that will need to show in listing table
  displayedColumns = ['CountryID', 'CountryName', 'action'];
  // setting up datasource for material table
  dataSource = new MatTableDataSource<ICountry>();

  constructor(public snackBar: MatSnackBar, private _countryService: CountryService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadingState = true;
    this.loadCountries();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CountryformComponent, {
      width: '500px',
      data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, country: this.country }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      if (result === 'success') {
        this.loadingState = true;
        this.loadCountries();
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

  loadCountries(): void {
    this._countryService.getAllCountry(Global.BASE_USER_ENDPOINT + 'Country/' + 'getAllCountry')
    .subscribe(countries => {
    this.loadingState = false;
    this.dataSource.data = countries;
    });
  }

  getGender(gender: number): string {
    return Global.genders.filter(ele => ele.id === gender).map(ele => ele.name)[0];
  }

  addCountry() {
    this.dbops = DBOperation.create;
    this.modalTitle = 'Add New Country';
    this.modalBtnTitle = 'Add';
    this.openDialog();
  }
  editCountry(id: number) {
    this.dbops = DBOperation.update;
    this.modalTitle = 'Edit Country';
    this.modalBtnTitle = 'Update';
    this.country = this.dataSource.data.filter(x => x.CountryID === id)[0];
    this.openDialog();
  }
  deleteCountry(id: number) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Confirm to Delete ?';
    this.modalBtnTitle = 'Delete';
    this.country = this.dataSource.data.filter(x => x.CountryID === id)[0];
    this.openDialog();
  }
  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
}

