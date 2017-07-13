import { Routes, RouterModule } from '@angular/router';

import { Accounts } from './accounts.component';
import { Users } from './components/users/users.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Accounts,
    children: [
      { path: 'users', component: Users }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
