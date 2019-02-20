// import { Component, OnInit } from '@angular/core';
// @Component({
//   selector: 'app-upload-files',
//   templateUrl: './upload-files.component.html',
//   styleUrls: ['./upload-files.component.css']
// })
// export class UploadFilesComponent implements OnInit {
//   constructor() { }
//   ngOnInit() {
//   }
// }
//import { Subject } from 'rxjs/Subject';
import { FileService } from '../services/files.services';
//import { StateService } from '../services/state.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-uploadfiles',
  templateUrl: './uploadfiles.component.html',
  styleUrls: ['uploadfiles.component.css']
})
export class UploadfilesComponent implements OnInit {
  @ViewChild('fileInput') fileInput: any;
  constructor(private fileService: FileService) { }

  ngOnInit() {
  }
  uploadPhoto() {
    const nativeElement: HTMLInputElement = this.fileInput.nativeElement;
    //let nativeElement: HTMLInputElement = this.fileInput.nativeElement;
    this.fileService.upload(nativeElement.files); 
  }
}
