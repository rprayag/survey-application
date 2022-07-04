import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radiobutton',
  template: `
 
  <div class="demo-full-width margin-top" [formGroup]="group">
 
  <label class="radio-label-padding">{{field.label}}:</label>
 
  <mat-radio-group [formControlName]="field.name">
 
  <mat-radio-button *ngFor="let item of field.options" [value]="item">{{item}}</mat-radio-button>
 
  </mat-radio-group>
 
  </div>
 
  `,
  styleUrls: [

    "../mystyle.css"
    
  ]
})
export class RadiobuttonComponent implements OnInit {
  
  field: FieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
