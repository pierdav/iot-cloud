/* * * ./app/users/components/user-list.component.ts * * */
// Imports
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserBoxComponent } from './user-box.component';
import { User } from '../model/user';
import {UserService} from '../services/user.service';
import { EmitterService } from '../../../../../emitter.service';

// Component decorator
@Component({
    selector: 'user-list',
    template: `
        <user-box [editId]="editId" [listId]="listId" *ngFor="let user of users" [user]="user"></user-box>
    `,
})
// Component class
export class UserListComponent implements OnInit, OnChanges{
    // Constructor with injected service
    constructor(
        private userService: UserService
        ){}
    // Local properties
    users: User[];
    // Input properties
    @Input() listId: string;
    @Input() editId: string;

    loadUsers(){
        // Get all users
         this.userService.getUsers()
                           .subscribe(
                               users => this.users = users, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }

    ngOnInit(){
            // Load users
            this.loadUsers()
    }
    

    ngOnChanges(changes:any) {
        // Listen to the 'list'emitted event so as populate the model
        // with the event payload
        EmitterService.get(this.listId).subscribe((users:User[]) => {this.loadUsers()});
    }
    
 }
