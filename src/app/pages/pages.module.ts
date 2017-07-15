import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { Pages } from './pages.component';
import { AdminComponent } from './admin/admin.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { DeviceComponent } from './device/device.component';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  declarations: [Pages, AdminComponent, CockpitComponent, DeviceComponent]
})
export class PagesModule {
}
