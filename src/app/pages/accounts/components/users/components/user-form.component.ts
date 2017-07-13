/* * * ./app/users/components/user-form.component.ts * * */
// Imports
import { Component, EventEmitter, Input, OnChanges } from '@angular/core';
import { NgForm }    from '@angular/common';
import {Observable} from 'rxjs/Rx';

import { UserBoxComponent } from './user-box.component'
import { UserService } from '../services/user.service';
import { EmitterService } from '../../../../../emitter.service';
import { User } from '../model/user'

// Component decorator
@Component({
    selector: 'user-form',
    template: `
        <form (ngSubmit)="submitUser()">
            <div class="form-group">
                <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-user"></span></span>
                    <input type="text" class="form-control" placeholder="Author" [(ngModel)]="model.author" name="author">
                </div>
                <br />
                <textarea class="form-control" rows="3" placeholder="Text" [(ngModel)]="model.text" name="text"></textarea>
                <br />
                <button *ngIf="!editing" type="submit" class="btn btn-primary btn-block">Add</button>
                <button *ngIf="editing" type="submit" class="btn btn-warning btn-block">Update</button>
            </div>
        </form>
    `,
})
// Component class
export class UserFormComponent implements OnChanges { 
    // Constructor with injected service
    constructor(
        private userService: UserService
        ){}
    // Local properties
    private model = new User(new Date(), '', '');
    private editing = false;
    
    // Input properties
     @Input() editId: string;
     @Input() listId: string;
     

    submitUser(){
        // Variable to hold a reference of addUser/updateUser
        let userOperation:Observable<User[]>;

        if(!this.editing){
            // Create a new user
            userOperation = this.userService.addUser(this.model)
        } else {
            // Update an existing user
             userOperation = this.userService.updateUser(this.model)
        }

        // Subscribe to observable
        userOperation.subscribe(
                                users => {
                                    // Emit list event
                                    EmitterService.get(this.listId).emit(users);
                                    // Empty model
                                    this.model = new User(new Date(), '', '');
                                    // Switch editing status
                                    if(this.editing) this.editing = !this.editing;
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }

    ngOnChanges() {
        // Listen to the 'edit'emitted event so as populate the model
        // with the event payload
        EmitterService.get(this.editId).subscribe((user:User) => {
            this.model = user
            this.editing = true;
        });
    }
 }
