import {NgModule, Component, ViewChild, ViewContainerRef} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {FormlyModule, FormlyFieldConfig, FormlyBootstrapModule, Field, FieldWrapper} from 'ng-formly';


@Component({
  selector: 'formliesfull',
  templateUrl: 'formlies.html',
})
export class FormliesFull {
  form: FormGroup;
  author;
  env;
  tabs;
  model: any = {};
  private fields: Array<FormlyFieldConfig> = [];

  submit(user) {
    console.log(user);
  }
  
  constructor(fb: FormBuilder) {
    
	this.form = fb.group({});

    this.author = {
      name: '',
      url: ''
    };
    
    this.env = {
      angularVersion: '2.1.1',
      formlyVersion: '2.0.0-beta.13'
    };
    
    this.tabs = [
      {
        title: 'Tab 1',
        active: true,
        form: {
          options: {},
          fields: [
            {
              key: 'email',
              type: 'input',
              templateOptions: {
                label: 'Username',
                type: 'email',
                placeholder: 'Email address',
                required: true
              }
            }
          ]
        }
      },
      {
        title: 'Tab 2',
        form: {
          options: {},
          fields: [
            {
              key: 'firstName',
              type: 'input',
              templateOptions: {
                label: 'First Name',
                required: true
              }
            },
            {
              key: 'lastName',
              type: 'input',
              templateOptions: {
                label: 'Last Name',
                required: true
              }
            }
          ] 
        }
      }
    ];

    this.model = {
      
    };
	

  }
}
