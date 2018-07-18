import {} from './../exports';
import { Response, RequestOptionsArgs } from "@angular/http";
import { Observable } from 'rxjs';

export class BaseEndpointDataProvider {

    constructor(){

    }

    protected getApiUrl(path: string): string {
        return "" + path;
    }

    protected getResponseBody(res: Response): any {
        return res && res.text() === "" ? res : res.json();
    }

    protected handleHttpError(error: Response) {
        console.log(error);
        let errResponse: Error = this.getResponseBody(error);
    }
}