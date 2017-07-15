/* * * ./app/users/components/user.service.ts * * */
// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { ApiHttp } from 'ng2-api/dist';
import { User } from '../model/user';


@Injectable()
export class UsersService {
    
    constructor (protected http: ApiHttp, protected router: Router) {
        
    }
    getUsers(params: any) {
        return this.http.get('sessionUser')
        .map((response: any) => response.json());
    }
    addUser(body: Object) {
        return this.http.get('sessionUser')
        .map((response: any) => response.json());
    }
    updateUser(body: Object) {
        return this.http.get('sessionUser')
        .map((response: any) => response.json());
    }
    removeUser(body: Object) {
        return this.http.get('sessionUser')
        .map((response: any) => response.json());
    }
}
