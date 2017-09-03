import { IValidator } from "./../utils/IValidator";
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
        if(Object.keys(query).length ==2 && 
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