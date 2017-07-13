import { Routes, RouterModule } from '@angular/router';

import { FormliesComponent } from './formlies.component';
import { FormliesTabs } from './formliestabs.component';
import { FormliesFull } from './formliesfull.component';

const routes: Routes = [
  {
    path: '',
    component: FormliesComponent,
	children: [
      { path: 'tabs', component: FormliesTabs },
      { path: 'full', component: FormliesFull },
    ]
  }
];

export const routing = RouterModule.forChild(routes);