import { IValidator } from "../../utils/IValidator";
export class PictureGetQuery {
    id: string;
}

class PictureGetQueryValidator implements IValidator {
    Validate(query: any): boolean {
        if(Object.keys(query).length == 1 && "id" in query){
            return true;
        }
        return false;
    }
}
export const validatorPicture: PictureGetQueryValidator = new PictureGetQueryValidator();

export class PicturesGetQuery {
    pageNumber: number;
    pageSize: number;
}
class PicturesGetQueryValidator implements IValidator {
    Validate(query: any): boolean {
        if(Object.keys(query).length == 2 && 
            "pageNumber" in query &&
            "pageSize" in query &&
            +query.pageNumber > 0 &&
            +query.pageSize > 0){
                return true;
        }
        return false;
    }
}
export const validatorPictures: PicturesGetQueryValidator = new PicturesGetQueryValidator();

export class PictureMetainfo {
    title: string;
    description: string;
}
class PictureMetainfoValidator implements IValidator {
    Validate(query: any): boolean {
        if(Object.keys(query).length == 2 &&
            "title" in query &&
            (query.title as string).length > 0 &&
            "description" in query){
                return true;
        }
        return false;
    }
}
export const validatorPictureMetainfo: PictureMetainfoValidator = new PictureMetainfoValidator();

export class PictureUpdateMetainfo {
    id: string;
    title: string;
    description: string;
}
class PictureUpdateMetainfoValidator implements IValidator {
    Validate(query: any): boolean {
        if(Object.keys(query).length == 3 &&
            "id" in query &&
            "title" in query &&
            "description" in query &&
            (query.title as string).length > 0 &&
            (query.id as string).length > 1
        ) {
            return true;
        }
        return false;
    }
}
export const validatorPictureUpdateMetainfo: PictureUpdateMetainfoValidator = new PictureUpdateMetainfoValidator();