import { PictureModel, IPicture } from './../models/picture';
import { PictureMetainfo } from './../models/pictureApi';
import * as Stream from 'stream';
import * as FS from 'fs';

import * as Config from 'config';
var appConfig: any = Config.get('Application');

class PictureService {

    async CreatePictureMetainfo(picture: IPicture): Promise<IPicture> {
        console.log(`Create picture metainfo: ${JSON.stringify(picture)}`);
        return await PictureModel.createPicture(picture);
    }

    async ReadPictureMetainfo(id: string): Promise<IPicture> {
        return new Promise<IPicture>((resolve, reject) => {
            PictureModel.findPictureById(id).then((res) => {
                resolve(res);
            }, (reason) => {
                resolve(null);
            });
        });
    }

    async ReadPictureMetainfoPagination(pageSize: number, pageCount: number): Promise<IPicture[]> {
        return await PictureModel.getPictures(pageSize, pageCount);
    }

    async UpdatePictureMetainfo(picture: IPicture): Promise<void> {
        PictureModel.updatePicture(picture);
    }

    async DeletePicture(picture: IPicture): Promise<void> {
        PictureModel.deletePicture(picture);
        // TODO: remove picture file from local storage
    }

    async PicturesCount(): Promise<number> {
        return await PictureModel.picturesCount();
    }

    SavePictureFileToLocal(stream: NodeJS.ReadableStream, filename: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            var fullFilename = `${appConfig.uploadFolder}/${filename}`;
            let fileStream = FS.createWriteStream(fullFilename);
            stream.pipe(fileStream).on('close', () => {
                resolve(fullFilename);
            });
        });
    }
}

export const service: PictureService = new PictureService();