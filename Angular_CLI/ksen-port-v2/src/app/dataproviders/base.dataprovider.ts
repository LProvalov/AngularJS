import { } from './../exports';
import { Response, RequestOptionsArgs } from "@angular/http";
import { Observable } from 'rxjs';

export class BaseDataProvider {
    constructor() { }

    protected getApiUrl(path: string): string {
        return "http://localhost:8100/api/" + path;
    }

    protected getResponseBody(res: Response): any {
        return res && res.text() === "" ? res : res.json();
    }

    protected handleHttpError(error: Response) {
        console.log(error);
        let errResponse: Error = this.getResponseBody(error);
    }

    protected getAuthOptions(): RequestOptionsArgs {
        let options: RequestOptionsArgs = {};
        return options;
    }
}