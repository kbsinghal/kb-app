import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

import { EntityformComponent } from '../entityform/entityform.component';

import { EntityService } from '../services/entity.service';
import { IEntity } from '../model/entity';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
  selector: 'app-entitylist',
  templateUrl: './entitylist.component.html',
  styleUrls: ['./entitylist.component.css']
})
export class EntitylistComponent implements OnInit {
  entities: IEntity[];
  entity: IEntity;
  loadingState: boolean;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;

  // set columns that will need to show in listing table
  displayedColumns = ['EntityID', 'Name', 'StateID', 'action'];
  // setting up datasource for material table
  dataSource = new MatTableDataSource<IEntity>();

  constructor(public snackBar: MatSnackBar, private _entityService: EntityService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadingState = true;
    this.loadEntities();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EntityformComponent, {
      width: '500px',
      data: {dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, entity: this.entity}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      if (result === 'success') {
        this.loadingState = true;
        this.loadEntities();
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

  loadEntities(): void {
    this._entityService.getAllEntity(Global.BASE_USER_ENDPOINT + 'Entity/' + 'getAllEntity')
    .subscribe(entities => {
    this.loadingState = false;
    this.dataSource.data = entities;
    });
  }

  getGender(gender: number): string {
    return Global.genders.filter(ele => ele.id === gender).map(ele => ele.name)[0];
  }

  addEntity() {
    this.dbops = DBOperation.create;
    this.modalTitle = 'Add New Entity';
    this.modalBtnTitle = 'Add';
    this.openDialog();
  }
  editEntity(id: number) {
    // console.log('id:' + id);
    this.dbops = DBOperation.update;
    this.modalTitle = 'Edit City';
    this.modalBtnTitle = 'Update';
    this.entity = this.dataSource.data.filter(x => x.EntityID === id)[0];
    // console.log('this.city');
    // console.log(this.city);
    this.openDialog();
  }
  deleteEntity(id: number) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Confirm to Delete ?';
    this.modalBtnTitle = 'Delete';
    this.entity = this.dataSource.data.filter(x => x.EntityID === id)[0];
    this.openDialog();
  }
  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
}

