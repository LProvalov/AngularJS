import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private imageUrlBase: string = "http://localhost:8100/api/picture";

  constructor(
    private http: HttpClient
  ) { }

  public getImage(id: number): Observable<Blob> {
    return this.http
      .get(`${this.imageUrlBase}/${id}`, {
        responseType: "blob"
      });
  }
}
