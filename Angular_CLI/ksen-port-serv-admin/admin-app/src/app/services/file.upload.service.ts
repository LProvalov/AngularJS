import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { RequestOptionsArgs, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private api: ApiService, private auth: AuthenticationService) { }

  uploadImage(formData: FormData): Observable<any> {
    let token = this.auth.getToken();
    let options: RequestOptionsArgs = {};
    if (token) {
      options.headers = new Headers();
      options.headers.append("Authorization", "Bearer " + token);
      //options.headers.append('Content-Type', 'multipart/form-data; charset=utf-8; boundary="another cool boundary"');
    }
    //console.log(`${JSON.stringify(options.headers)}`);
    return this.api.uploadImage(formData, options);
  }
}
