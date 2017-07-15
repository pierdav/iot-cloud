import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { AdminComponent } from './admin/admin.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { DeviceComponent } from './device/device.component';
import { ModuleWithProviders } from '@angular/core';
import { AppGuard } from 'app/app.guard';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule',
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule',
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AppGuard] },
      { path: 'users', loadChildren: './users/users.module#UsersModule', canActivate: [AppGuard] },
      /*
      { path: 'roles', loadChildren: './roles/roles.module#RolesModule', canActivate: [AppGuard] },
      { path: 'log', loadChildren: './log/log.module#LogModule', canActivate: [AppGuard] },
      */
     ],
  },
  {
    path: 'cockpit',
    component: CockpitComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'users', loadChildren: './users/users.module#UsersModule', canActivate: [AppGuard] },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AppGuard] },
     ],
  },
  {
    path: 'device',
    component: DeviceComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'users', loadChildren: './users/users.module#UsersModule', canActivate: [AppGuard] },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AppGuard] },
     ],
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'formlies', loadChildren: './formlies/formlies.module#FormliesModule', canActivate: [AppGuard] },
      { path: 'users', loadChildren: './users/users.module#UsersModule', canActivate: [AppGuard] },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AppGuard] },
      { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
      { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
