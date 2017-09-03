import { PictureModel, IPicture } from './../models/picture';

class PictureService{
    
    async UploadPicture(picture: { title: string, description: string}): Promise<IPicture> {
        // TODO: save picture on disk.
        picture["path"] = "some path";
        console.log(picture);
        return await PictureModel.createPicture(<IPicture>picture);
    }

    async PicturesCount(): Promise<number> {
        return await PictureModel.picturesCount();
    }

    async GetPicture(pageSize: number, pageCount: number): Promise<IPicture[]> {
        return await PictureModel.getPictures(pageSize, pageCount);
    }

    async PictureDetail(id: string): Promise<IPicture> {
        return await PictureModel.findPictureById(id);
    }

}

export const service: PictureService = new PictureService();