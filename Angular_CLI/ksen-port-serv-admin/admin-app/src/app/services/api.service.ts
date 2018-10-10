import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
    private http: Http
  ) { }

  public login(username: string, password: string): Observable<any> {
    return of({
      username: "vasia",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFAZ21haWwuY29tIiwiaWF0IjoxNTM5MTY4MjIwLCJleHAiOjE1MzkxNzE4MjB9.LALnwMdNhv1jiRnNtePIlUObVidEl7Wokq17CpoCUPA"
    });
    //return this.httpClient.post<any>(`api/users/authenticate`, { username: username, password: password });
  }

  get(url: string, args?: RequestOptionsArgs): Observable<any> {
    if (args == null) args = {};
    args.headers = this.prepareHeaders(args.headers);

    return this.http.get(url, args);
  }

  post(url: string, data: any, args?: RequestOptionsArgs, includeHeaders?: boolean): Observable<any> {
    console.log('Post');
    if (args == null) args = {};
    args.headers = this.prepareHeaders(args.headers);
    let requestData = data instanceof ArrayBuffer ? data : JSON.stringify(data);

    return this.http.post(url, requestData, args);
  }

  put(url: string, data: any, args?: RequestOptionsArgs, includeHeaders?: boolean): Observable<any> {
    if (args == null) args = {};
    args.headers = this.prepareHeaders(args.headers);
    let requestData = data instanceof ArrayBuffer ? data : JSON.stringify(data);

    return this.http.put(url, requestData, args);
  }

  delete(url: string, args?: RequestOptionsArgs, includeHeaders?: boolean): Observable<any> {
    if (args == null) args = {};
    args.headers = this.prepareHeaders(args.headers);

    return this.http.delete(url, args);
  }

  /*  
    postMultipart(uri: string, headers: Headers, data: any): XhrObservable {
      let xhr = new XMLHttpRequest();
      let onAboutFn: any;
      let obs = new Observable(observer => {
  
        xhr.upload.onprogress = (event: any) => {
          let progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
          observer.next(progress);
        };
        xhr.onload = () => {
          this._isSuccessCode(xhr.status)
            ? observer.complete()
            : observer.error({
              response: xhr.response,
              status: xhr.status
            });
        };
        xhr.onerror = () => {
          observer.error({
            response: xhr.response,
            status: xhr.status
          });
        };
        onAboutFn = () => {
          observer.complete();
        }
        var formData = new FormData();
        for (var key in data) {
          formData.append(key, data[key]);
        }
        xhr.open('POST', uri, true);
        for (let i = 0; i < headers.keys().length; i++) {
          xhr.setRequestHeader(headers.keys()[i], headers.get(headers.keys()[i]));
        }
        xhr.send(formData);
      });
      let xhrObserver = new XhrObservable(xhr, obs, () => { onAboutFn() });
      return xhrObserver;
    }
  */
  private prepareHeaders(headers: Headers): Headers {
    let hasContentType = headers && headers.has("Content-Type");
    let hasAccept = headers && headers.has("Accept");
    if (!hasContentType || !hasAccept) {
      let newHeaders = new Headers(headers);
      if (!newHeaders.has("Content-Type")) {
        newHeaders.append("Content-Type", "application/json");
      }
      if (!newHeaders.has("Accept")) {
        newHeaders.append("Accept", "application/json");
      }
      return newHeaders;
    }
    return headers;
  }

  protected _isSuccessCode(status: number): boolean {
    return (status >= 200 && status < 300) || status === 304;
  }
}
