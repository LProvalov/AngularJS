import * as _ from 'lodash';
import { IValidator } from "../../utils/IValidator";

export interface IPaginationQuery {
    pageCount: number;
    pageSize: number;
}

const paginationQueryKeys: string[] = ["pageNumber", "pageSize"];

class PaginationValidatorClass implements IValidator {
    Validate(query: any): boolean {
        let queryKeys: string[] = Object.keys(query);
        if (queryKeys.length < paginationQueryKeys.length) return false;
        for (let i = 0; i < paginationQueryKeys.length; i++) {
            if (!(queryKeys[i] in query) ||
                +query[queryKeys[i]] < 0) return false;
        }
        return true;
    }
}
Object.seal(PaginationValidatorClass);
export const PaginationValidator: PaginationValidatorClass = new PaginationValidatorClass();

const idQueryKey: string = "id";

class IdValidatorClass implements IValidator {
    Validate(query: any): boolean {
        let queryKeys: string[] = Object.keys(query);
        if (queryKeys.length < 1 || !(idQueryKey in query) || _.isEmpty(query[idQueryKey])) {
            return false;
        }
        return true;
    }
}
Object.seal(IdValidatorClass);
export const IdValidator: IdValidatorClass = new IdValidatorClass();