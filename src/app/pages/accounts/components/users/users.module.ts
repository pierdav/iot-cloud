import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { UserBoxComponent } from './components/user-box.component';
import { UserListComponent } from './components/user-list.component';
import { UserFormComponent } from './components/user-form.component';
import { UserComponent } from './components/index';


import { UserService } from './services/user.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
    JsonpModule,
    
  ],
  declarations: [
    UserBoxComponent,
    UserFormComponent,
    UserListComponent,
    UserComponent
  ],

  providers: [
      UserService
  ],

  exports:[
    UserBoxComponent,
    UserFormComponent,
    UserListComponent,
    UserComponent
  ]
  
})
export class UserModule {
}

