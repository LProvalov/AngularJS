import { Directive } from '@angular/core';
import { ArtworkService } from './artwork.service';
import { ArtWork } from './models/allmodels';

@Directive({
  selector: '[appImageLoader]',
  inputs: ['imageSourceUrl']
})
export class ImageLoaderDirective {

  imageSourceUrl: string;
  data: any;
  constructor(private artWorkService: ArtworkService) {
  }

  async ngOnInit(): Promise<void> {
    console.log(`source: ${this.imageSourceUrl}`);
    this._loadPicture(this.imageSourceUrl).then( result => {
      console.log(result);
      this.data = this.imageSourceUrl;//result;
    });
  }

  _loadPicture(imageSourceUrl: string): Promise<any> {
    return new Promise<any>( (resolve, reject) => {
      this.artWorkService.getArtworkSouce(imageSourceUrl).subscribe( res => {
        resolve(res);
      });
    });
  }
}
