/* * * ./app/comments/components/index.ts * * */
// Imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { authenticated } from '../../../app.guard';
import { UsersService } from '../services/users.service';

@Component({
    selector: 'user-widget',
    templateUrl: './users.html',
})
export class UserComponent implements OnInit { 
    
    authenticated: boolean = authenticated();

    session: any;
    users: any;


    ngOnInit() {
        this.getUsers(); 
    }

    constructor(
        private router: Router,
        private usersService: UsersService,
        
      ) {}

    getUsers() {
        this.usersService.getUsers({})
        .subscribe(result => {
            if (result && result.value) {
                console.log(result);
                this.session = JSON.stringify(result);
                this.users = [result.value];
            } else {
                
            }
        });
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
        event.confirm.resolve();
        } else {
        event.confirm.reject();
        }
    }
 }
