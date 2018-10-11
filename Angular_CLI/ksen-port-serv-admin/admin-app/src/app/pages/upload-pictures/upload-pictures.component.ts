import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './../../services/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-pictures',
  templateUrl: './upload-pictures.component.html',
  styleUrls: ['./upload-pictures.component.css']
})
export class UploadPicturesComponent implements OnInit {

  constructor(
    private upload: FileUploadService,
    private formBuilder: FormBuilder
    ) { }

  selectedFile: File;
  uploadMetainfoForm: FormGroup;
  uploading: boolean = false;

  ngOnInit() {
    this.uploadMetainfoForm = this.formBuilder.group({
      file: [null, Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required]      
    });
  }

  get f() { return this.uploadMetainfoForm.controls; }

  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.uploadMetainfoForm.get('picture').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        });
      };
    }
    this.selectedFile = event.target.files[0]
  }

  onSubmit() {
    this.uploading = true;
    let formData = new FormData();
    let metainfo = {
      title: this.f.title.value ,
      description: this.f.description.value
    };
    formData.append("metainfo", JSON.stringify(metainfo));

    formData.append("file", this.selectedFile);
    this.upload.uploadImage(formData).subscribe(event => {
      if (event.status == 200) {
        this.uploading = false;
      }
    });
  }
}