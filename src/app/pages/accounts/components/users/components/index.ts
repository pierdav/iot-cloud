/* * * ./app/comments/components/index.ts * * */
// Imports
import { Component} from '@angular/core';
import {EmitterService} from '../../../../../emitter.service';

@Component({
    selector: 'comment-widget',
    template: `
        <div>
            <user-form [listId]="listId" [editId]="editId"></user-form>
            <user-list [listId]="listId" [editId]="editId"></user-list>
        </div>
    `,
})
export class UserComponent { 
    // Event tracking properties
    private listId = 'USER_COMPONENT_LIST';
    private editId = 'USER_COMPONENT_EDIT';
 }
