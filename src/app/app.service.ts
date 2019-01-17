import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {

    apiUrl: String;
    constructor(
        private http: HttpClient
) {
    }

    getProfileUser() {
        return JSON.parse(sessionStorage.getItem('profile'));
    }

    getJwt() {
        console.log(sessionStorage.getItem('jwt'))
        return JSON.parse(sessionStorage.getItem('jwt'));
    }

}
