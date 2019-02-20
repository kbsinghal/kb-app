import { Component } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';

import { Uploader } from '../model/uploader';
import { UploadQueue } from '../model/uploadqueue';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html'
})


export class UploadComponent {

  //getter : get overall progress
  get progress(): number {
    let psum = 0;

    for (const entry of this.uploader.queue) {
    //for (let entry of this.uploader.queue) {
      psum += entry.progress;
    }

    if (psum === 0) {//if (psum == 0) {
      return 0; }

    return Math.round(psum / this.uploader.queue.length);
  }

  public message: string;
  public uploader: Uploader = new Uploader();

  constructor(private http: HttpClient) {
    this.message = '';    
  }

  onFilesChange(fileList: Array<File>) {
    for (const file of fileList) {
    //for (let file of fileList) {
      this.uploader.queue.push(new UploadQueue(file));
    } 
  }

  onFileInvalids(fileList: Array<File>) {
    //TODO handle invalid files here
  }
  
  onSelectChange(event: EventTarget) {
    // let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    // let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    // let files: FileList = target.files;
    // let file = files[0];
    const eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    const target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    const files: FileList = target.files;
    const file = files[0];

    if (file) {
      this.uploader.queue.push(new UploadQueue(file));
      //console.log(file);
      console.log('Total Count:' + this.uploader.queue.length);      
    }
    
  }

  // upload 
upload(id) {
  if (id == null) {
     return;   }

      //let selectedFile = this.uploader.queue.find(s => s.id == id);
      const selectedFile = this.uploader.queue.find(s => s.id === id);
      if (selectedFile) {
        const formData = new FormData();
        formData.append(selectedFile.file.name, selectedFile.file);

        const uploadReq = new HttpRequest('POST', `kbapi/upload`, formData, {
          reportProgress: true,
        });

        this.http.request(uploadReq).subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {           
            selectedFile.progress = Math.round(100 * event.loaded / event.total);
          }   else if (event.type === HttpEventType.Response) {
            selectedFile.message = event.body.toString();
          }
        });
      }
  }
  //upload all selected files to server
  uploadAll() {
    //find the remaning files to upload
    //let remainingFiles = this.uploader.queue.filter(s => !s.isSuccess);
    const remainingFiles = this.uploader.queue.filter(s => !s.isSuccess);
    for (const item of remainingFiles) {
    //for (let item of remainingFiles) {
      this.upload(item.id);
    }
  }

  // cancel all 
  cancelAll() {
    //TODO
  }
}
