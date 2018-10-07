import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-pictures',
  templateUrl: './upload-pictures.component.html',
  styleUrls: ['./upload-pictures.component.css']
})
export class UploadPicturesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitHandler(){
    let imageInput: any = document.getElementById("image-input");
    
    let sendingFile = imageInput.files[0];
    let sendingData = {
        'title': document.getElementById("image-title").nodeValue,
        'description': document.getElementById("image-description").nodeValue
    };
    console.log(JSON.stringify(sendingData));
    console.log(sendingFile);

    if(sendingFile !== undefined){
        let formData = new FormData();
        formData.append("metainfo", JSON.stringify(sendingData));
        formData.append("file", sendingFile);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:3000/api/picture");
        xhr.send(formData);
    }
  }
}
