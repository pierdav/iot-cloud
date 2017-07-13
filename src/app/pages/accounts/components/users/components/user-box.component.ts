/* * * ./app/users/components/user-box.component.ts * * */
// Imports
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user'
import { EmitterService } from '../../../../../emitter.service';
import { UserService } from '../services/user.service';

// Component decorator
@Component({
    selector: 'user-box',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">{{user.author}}</div>
            <div class="panel-body">
                {{user.text}}
            </div>
            <div class="panel-footer">
                <button class="btn btn-info" (click)="editUser()"><span class="glyphicon glyphicon-edit"></span></button>
                <button class="btn btn-danger" (click)="deleteUser(user.id)"><span class="glyphicon glyphicon-remove"></span></button>
            </div>
        </div>
    `
    // No providers here because they are passed down from the parent component
})
// Component class
export class UserBoxComponent { 
    // Constructor
     constructor(
        private userService: UserService
        ){}
    // Define input properties
    @Input() user: user;
    @Input() listId: string;
    @Input() editId:string;

    editUser(){
        // Emit edit event
        EmitterService.get(this.editId).emit(this.user);
    }

    deleteuser(id:string){
        // Call removeUser() from UserService to delete user
        this.userService.removeUser(id).subscribe(
                                users => {
                                    // Emit list event
                                    EmitterService.get(this.listId).emit(users);
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }
 }
