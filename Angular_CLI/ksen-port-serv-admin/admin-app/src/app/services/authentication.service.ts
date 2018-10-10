import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private api: ApiService) { }

    login(username: string, password: string) {
        return this.api.login(username, password)
            .pipe(map(user => {
                console.log(`user: ${JSON.stringify(user)}`);
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    getUsername(): Observable<string> {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        return of(user.username ? user.username : "Anonimus");
    }

    getToken(): string {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        return user? user.token : "";
    }
}

