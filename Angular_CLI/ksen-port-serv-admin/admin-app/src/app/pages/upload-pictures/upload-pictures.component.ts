import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './../../services/services';

@Component({
  selector: 'app-upload-pictures',
  templateUrl: './upload-pictures.component.html',
  styleUrls: ['./upload-pictures.component.css']
})
export class UploadPicturesComponent implements OnInit {

  constructor(private upload: FileUploadService) { }

  ngOnInit() {
  }

  selectedFile: File;
  title: string;
  description: string;

  onFileChanged(event) {
    const file = event.target.files[0]
  }

  submitHandler() {
    const uploadData = new FormData();
    let formData = new FormData();
    let metainfo = { title: this.title};
    formData.append("metainfo", JSON.stringify(metainfo));
    formData.append("file", this.selectedFile);
    this.upload.uploadImage(formData).subscribe( event => {
      console.log(event);
    });
  }
}