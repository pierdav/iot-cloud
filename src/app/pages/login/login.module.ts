import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { ApiConfig, ApiHttp } from 'ng2-api';

import * as AppConst from '../../app.const'; 
import { LoginComponent } from './login.component';
import { routing }       from './login.routing';
import { LoginService } from './login.service';

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
    LoginComponent,
  ],
  providers: [
    {
      provide: ApiHttp,
      useFactory: (http: Http) => new ApiHttp(new ApiConfig({ baseUrl: AppConst.endpointApi }), http),
      deps: [Http]
    },
    LoginService,
  ]
})
export class LoginModule {}
