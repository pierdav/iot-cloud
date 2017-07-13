import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormlyModule, FormlyFieldConfig, FormlyBootstrapModule, Field, FieldWrapper} from 'ng-formly';
import { FormliesComponent } from './formlies.component';
import { FormliesTabs } from './formliestabs.component';
import { FormliesFull } from './formliesfull.component';
import { FormlyTabsetWrapper } from './formlytabset.component';
import { FormlyTabWrapper } from './formlytabwrap.component';
import { routing } from './formlies.routing';

const FIELD_TYPE_COMPONENTS = [
    FormlyTabsetWrapper,
    FormlyTabWrapper,
	FormliesTabs,
	FormliesFull
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
	NgbModule.forRoot(),
	FormlyModule.forRoot({
      wrappers: [
          { name: 'tabset', component: FormlyTabsetWrapper },
          { name: 'tab', component: FormlyTabWrapper }
      ]
    }),
    FormlyBootstrapModule,
	FormliesTabs,
	FormliesFull,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    FormliesComponent,
	FIELD_TYPE_COMPONENTS
  ]
})
export class FormliesModule {}

