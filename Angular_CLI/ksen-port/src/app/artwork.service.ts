import { Injectable } from '@angular/core';
import { ArtWork, Layout } from './models/allmodels';

import { Headers, Http, ResponseContentType } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import * as _ from 'lodash';
import { FormatString } from './utils';
import * as config from 'config';

const ARTWORKS: ArtWork[] = [
  { id: 11, title: 'Flower', imgUrl: '', description: '', uploadedAt: new Date() },
  { id: 12, title: 'Pot', description: '', uploadedAt: new Date() },
  { id: 13, title: 'Flower 2', description: '', uploadedAt: new Date() },
  { id: 14, title: 'Bus stop', description: '', uploadedAt: new Date() },
  { id: 15, title: 'Women face', description: '', uploadedAt: new Date() },
  { id: 16, title: 'Old man', description: '', uploadedAt: new Date() },
  { id: 17, title: 'Glass of absent', description: '', uploadedAt: new Date() },
  { id: 18, title: 'Chily', description: '', uploadedAt: new Date() },
  { id: 19, title: 'Chily #2', description: '', uploadedAt: new Date() },
  { id: 20, title: 'Draft #1', description: '', uploadedAt: new Date() }
];

const LAYOUTS: Layout[] = [
  { id: 11, title: 'title1', imgUrl: '', description: '', uploadedAt: new Date() },
  { id: 12, title: 'title2', imgUrl: '', description: '', uploadedAt: new Date() },
  { id: 13, title: 'title3', imgUrl: '', description: '', uploadedAt: new Date() },
  { id: 14, title: 'title4', imgUrl: '', description: '', uploadedAt: new Date() },
  { id: 15, title: 'title5', imgUrl: '', description: '', uploadedAt: new Date() }
]

@Injectable()
export class ArtworkService {

  private baseUrl = "http://localhost:3000/api";
  private artworksList = "/pictures?pageNumber={0}&pageSize={1}";
  private downloadArtwork = "/picture/{0}";

  constructor(
    private httpClient: HttpClient,
    private http: Http
  ) { }

  getArtworks(): ArtWork[] {
    return null;
  }

  getArtworksAsync(): Promise<ArtWork[]> {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(ARTWORKS);
      }, 1000);
    });
  }

  getLayoutsAsync(): Promise<Layout[]> {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(LAYOUTS);
      }, 700);
    });
  }

  getArtworksPageAsync(pageNumber: number, pageSize: number): Promise<ArtWork[]> {
    return new Promise<ArtWork[]>((resolve, reject) => {
      let url = `${this.baseUrl}${FormatString(this.artworksList, pageNumber, pageSize)}`;
      console.log(`url: ${url}`);
      this.httpClient.get(url).subscribe(data => {
        let artworks: ArtWork[] = this._mapToArtWorks(data);
        if (artworks) resolve(artworks);
        else reject('Something goes wrong');
      });
    });
  }

  private handleError(error: any): Promise<any> {
    console.error(error);
    return Promise.reject(error.message || error);
  }

  getLastArtworks(count: number): Promise<ArtWork[]> {
    return new Promise<ArtWork[]>((resolve, reject) => {
      let url = `${this.baseUrl}${FormatString(this.artworksList, 1, count)}`;
      console.log(`url: ${url}`);
      this.httpClient.get(url).subscribe(data => {
        let artworks: ArtWork[] = this._mapToArtWorks(data);
        if (artworks) resolve(artworks);
        else reject('Something goes wrong');
      });
    });
  }

  _mapToArtWorks(data: any): ArtWork[] {
    if (_.isArray(data)) {
      let artworks: ArtWork[] = _.map(data, item => {
        let artwork: ArtWork;
        console.log(item._id);
        artwork = {
          id: item._id,
          description: item.description,
          title: item.title,
          uploadedAt: item.uploadedAt,
          imgUrl: `${this.baseUrl}${FormatString(this.downloadArtwork, item._id)}`
        };
        return artwork;
      });
      console.log(JSON.stringify(artworks));
      return artworks;
    }
    return null;
  }

  getArtworkSouce(artworkUrl: string): Observable<string> {
    return new Observable( (observer: Subscriber<string>) => {
      let objectUrl: string = null;
      this.http
        .get(artworkUrl, { responseType: ResponseContentType.Blob })
        .subscribe( m => {
          objectUrl = URL.createObjectURL(m.blob());
          observer.next(objectUrl);
        });
      
      return() => {
        if(objectUrl) {
          URL.revokeObjectURL(objectUrl);
          objectUrl = null;
        }
      }
    });
    /*
    return new Promise<any>((resolve, reject) => {
      let req = new XMLHttpRequest();
      req.open('get', artworkUrl);
      req.responseType = "arraybuffer";
      req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200) {
          
        }
      }
      */
    /*
      console.log(`artworkUrl: ${artworkUrl}`);
      this.httpClient.get(artworkUrl, { observe:'response', responseType: 'text' }).subscribe(resp => {
        console.log(resp.body);
        var blob = new Blob([resp.body], {type: 'image/jpeg'});
        console.log(blob);
        resolve(blob);
      }); 
    });
    */
  }

  getLastLayoutsAsync(count: number): Promise<Layout[]> {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        if (LAYOUTS.length >= count) resolve(LAYOUTS.slice(LAYOUTS.length - count, LAYOUTS.length));
        else resolve(LAYOUTS);
      }, 700);
    });
  }

  getArtwork(id: number): Promise<ArtWork> {
    return this.getArtworksAsync()
      .then(artworks => artworks.find(artwork => artwork.id === id));
  }
}

