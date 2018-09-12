import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

import { AreaformComponent } from '../areaform/areaform.component';

import { AreaService } from '../services/area.service';
import { IArea } from '../model/area';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
  selector: 'app-arealist',
  templateUrl: './arealist.component.html',
  styleUrls: ['./arealist.component.css']
})
export class ArealistComponent implements OnInit {
  areas: IArea[];
  area: IArea;
  loadingState: boolean;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;

  // set columns that will need to show in listing table
  displayedColumns = ['AreaID', 'AreaName', 'CityID', 'CityName', 'StateID', 'StateName', 'CountryID', 'CountryName', 'action'];
  // setting up datasource for material table
  dataSource = new MatTableDataSource<IArea>();

  constructor(public snackBar: MatSnackBar, private _areaService: AreaService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadingState = true;
    this.loadAreas();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AreaformComponent, {
      width: '500px',
      data: {dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, area: this.area}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      if (result === 'success') {
        this.loadingState = true;
        this.loadAreas();
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

  loadAreas(): void {
    this._areaService.getAllArea(Global.BASE_USER_ENDPOINT + 'Area/' + 'getAllArea')
    .subscribe(areas => {
    this.loadingState = false;
    this.dataSource.data = areas;
    });
  }

  getGender(gender: number): string {
    return Global.genders.filter(ele => ele.id === gender).map(ele => ele.name)[0];
  }

  addArea() {
    this.dbops = DBOperation.create;
    this.modalTitle = 'Add New Area';
    this.modalBtnTitle = 'Add';
    this.openDialog();
  }
  editArea(id: number) {
    // console.log('id:' + id);
    this.dbops = DBOperation.update;
    this.modalTitle = 'Edit Area';
    this.modalBtnTitle = 'Update';
    this.area = this.dataSource.data.filter(x => x.AreaID === id)[0];
    // console.log('this.city');
    // console.log(this.city);
    this.openDialog();
  }
  deleteArea(id: number) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Confirm to Delete ?';
    this.modalBtnTitle = 'Delete';
    this.area = this.dataSource.data.filter(x => x.AreaID === id)[0];
    this.openDialog();
  }
  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
}

