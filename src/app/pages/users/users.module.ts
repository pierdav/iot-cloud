import { NgModule }       from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { ApiConfig, ApiHttp } from 'ng2-api';

import { NgaModule } from '../../theme/nga.module';
import * as AppConst from '../../app.const'; 
import { UserComponent } from './components/index';
import { UsersService } from './services/users.service';
import { AppTranslationModule } from 'app/app.translation.module';
import { routing } from './users.routing';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    /*UserBoxComponent,
    UserFormComponent,
    UserListComponent,*/
    UserComponent,
  ],

  providers: [
    {
      provide: ApiHttp,
      useFactory: (http: Http) => new ApiHttp(new ApiConfig({ 
        baseUrl: AppConst.endpointApi, 
        authHeaderPrefix: '  ', 
        authHeaderName: 'token' }), http),
      deps: [Http],
    },
      UsersService,
  ],
  
})
export class UsersModule {
}

