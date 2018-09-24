import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { UserformComponent } from '../userform/userform.component';

import { UserService } from '../services/user.service';
import { IUser } from '../model/user';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  Users: IUser[];
  user: IUser;
  loadingState: boolean;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;

  // set columns that will need to show in listing table
  displayedColumns = ['UID', 'Username', 'FirstName', 'LastName', 'action'];
  // setting up datasource for material table
  dataSource = new MatTableDataSource<IUser>();

  constructor(public snackBar: MatSnackBar, private _userService: UserService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadingState = true;
    this.loadUsers();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(UserformComponent, {
      width: '500px',
      data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, state: this.user }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      if (result === 'success') {
        this.loadingState = true;
        this.loadUsers();
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

  loadUsers(): void {
    this._userService.getAllUser(Global.BASE_USER_ENDPOINT + 'User/' + 'getAllUser')
    .subscribe(users => {
    this.loadingState = false;
    this.dataSource.data = users;
    });
  }

  getGender(gender: number): string {
    return Global.genders.filter(ele => ele.id === gender).map(ele => ele.name)[0];
  }

  addUser() {
    this.dbops = DBOperation.create;
    this.modalTitle = 'Add New User';
    this.modalBtnTitle = 'Add';
    this.openDialog();
  }
  editUser(id: number) {
    this.dbops = DBOperation.update;
    this.modalTitle = 'Edit User';
    this.modalBtnTitle = 'Update';
    this.user = this.dataSource.data.filter(x => x.UID === id)[0];
    this.openDialog();
  }
  deleteUser(id: number) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Confirm to Delete ?';
    this.modalBtnTitle = 'Delete';
    this.user = this.dataSource.data.filter(x => x.UID === id)[0];
    this.openDialog();
  }
  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
}

