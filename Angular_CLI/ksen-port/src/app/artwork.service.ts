import { Injectable } from '@angular/core';
import { ArtWork } from './models/artwork';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import * as _ from 'lodash';
import { FormatString } from './utils';
import * as Config from 'config';

// TODO: resolve problem with get config.
//var ApiConfig: any = Config.get('Application.Api');

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


@Injectable()
export class ArtworkService {

  constructor(private http: Http) { }

  getArtworks(): ArtWork[] {
    return null;
  }

  getArtworksAsync(): Promise<ArtWork[]> {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve(ARTWORKS);
      }, 1000);
    });

    //return new Promise((resolve, reject) => {
    //  let url = ApiConfig.Url + FormatString(ApiConfig.ArtworksList, 1, 10);
    //  console.log(`Url: ${url}`);
    //  this.http.get(url)
    //    .toPromise()
    //    .then(response => { 
    //      _.map(response.json().data,  (item: any) => {
    //        <ArtWork>{
    //          id: item._id,
    //          title: item.title,
    //          description: item.description,
    //          uploadedAt: item.uploadedAt,
    //          imgUrl: ApiConfig.Url + FormatString(ApiConfig.DownloadArtwork, item._id)
    //        }
    //      }); 
    //    })
    //    .catch(this.handleError);
    //});
  }

  private handleError(error: any): Promise<any> {
    console.error(error);
    return Promise.reject(error.message || error);
  }

  getLastArtworks(count: number): Promise<ArtWork[]> {
    return new Promise((resolve: Function, reject: Function) => {
      setTimeout(() => {
        resolve(null/*ARTWORKS.slice(ARTWORKS.length - count, ARTWORKS.length)*/);
      }, 1000);
    });
  }
  getArtwork(id: number): Promise<ArtWork> {
    return this.getArtworksAsync()
      .then( artworks => artworks.find(artwork => artwork.id === id));
  }
}

