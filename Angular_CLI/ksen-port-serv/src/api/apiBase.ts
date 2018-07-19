import { Request, Response } from "express";
import { IValidator } from "../utils/IValidator";
export class ApiBase {
    protected static apiUrl: string = "/api";

    constructor(){

    }

    queryValidation<T>(query: any, validator: IValidator){
        console.log('queryValidation');        
        if(validator.Validate(query)){
            return query as T;
        }        
        throw new Error("Validation error. Query has wrong format.");
    }
}