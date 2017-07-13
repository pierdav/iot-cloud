import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from "@angular/http";

import { routing } from './accounts.routing';
import { Accounts } from './accounts.component';

import { Users } from './components/users/users.component';
import { UsersService } from './components/users/users.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    HttpModule,
  ],
  declarations: [
    Accounts,
    Users,
  ],
  providers: [
    UsersService,
  ],
})
export class AccountsModule {
}
