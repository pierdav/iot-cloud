import {NgModule, Component, ViewChild, ViewContainerRef} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {FormlyModule, FormlyFieldConfig, FormlyBootstrapModule, Field, FieldWrapper} from 'ng-formly';

@Component({
  selector: 'formly-wrapper-tab',
  template: `
    <ngb-tab title="foo">
        <ng-template ngbTabTitle>
            <span class="control-label" *ngIf="templateOptions.label">
                {{templateOptions.label}}
            </span>
        </ng-template>
        <ng-template #fieldComponent ngbTabContent>
        </ng-template>
    </ngb-tab>
  `,
})
export class FormlyTabWrapper extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}