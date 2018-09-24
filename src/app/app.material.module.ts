import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule } from '@angular/material';
import { MatPaginatorModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatInputModule } from '@angular/material';
import { MatDatepickerModule, MatNativeDateModule, MatOptionModule, MatDialogModule } from '@angular/material';
//import { MatDatepickerModule, MatOptionModule, MatDialogModule } from '@angular/material';
import {  MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';
//import {  MatMomentDateModule } from '@angular/material-moment-adapter';



@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatRadioModule,
        MatSelectModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        //MatMomentDateModule,
        MatOptionModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatSnackBarModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatRadioModule,
        MatSelectModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        //MatMomentDateModule,
        MatOptionModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatSnackBarModule
    ]
    
})
export class AppMaterialModule { }
