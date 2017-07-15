import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHttp } from 'ng2-api';


@Injectable()
export class LoginService {
    
    user: Object;

    constructor(protected http: ApiHttp,
        protected router: Router) {
        try {
        this.user = JSON.parse(localStorage.getItem('profile'));
        } catch (e) {
        this.user = {};
        }
  }
  login(params: any) {
    return this.http.post('authUser' , JSON.stringify(params))
      .map((response: any) => response.json());
  }
}
