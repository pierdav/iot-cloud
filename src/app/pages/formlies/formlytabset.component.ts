import {NgModule, Component, ViewChild, ViewContainerRef} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {FormlyModule, FormlyFieldConfig, FormlyBootstrapModule, Field, FieldWrapper} from 'ng-formly';

@Component({
  selector: 'formly-wrapper-tabset',
  template: `
    <ngb-tabset >
      <ng-template #fieldComponent></ng-template>
    </ngb-tabset>
  `,
})
export class FormlyTabsetWrapper extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}
