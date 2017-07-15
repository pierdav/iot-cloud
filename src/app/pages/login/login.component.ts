import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Md5 } from 'ts-md5/dist/md5';
import { authenticated } from '../../app.guard';
import { LoginService } from './login.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.html',
    styleUrls: ['./login.scss'],
    providers: [Md5],
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    passmd5: string = '';
    authenticated: boolean = authenticated();

    constructor(
        private router: Router,
        private loginService: LoginService,
        private md5: Md5,
      ) {
         }

    ngOnInit() {
        // reset login status
        this.logout();
    }

    login() {
        this.loading = true;
        this.passmd5 = this.md5.appendStr(this.model.password).end().toString();
        this.loginService.login({ username: this.model.username, password: this.passmd5 })
            .subscribe(result => {
                if (result) {
                  console.log(result);
                  localStorage.setItem('token', result.token);
                  this.authenticated = true;
                  this.loginService.user = result;
                  this.router.navigate(['/pages']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }

    logout() {
      localStorage.removeItem('token');
      this.authenticated = false;
      this.loginService.user = null;
      this.router.navigate(['/login']);
    }
}
