import { Component, OnInit } from '@angular/core';

//Uploader 
import { FileUploader } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';

const URL = 'assets/img/';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

	uploader:FileUploader;

  constructor(private http: HttpClient) { 
  	this.uploader = new FileUploader({url: URL, itemAlias: 'photo'});
  }

  ngOnInit(): void {
  	this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('FileUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };
  }

}
