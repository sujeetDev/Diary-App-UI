import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.sass']
})
export class AddOrganizationComponent implements OnInit {

  constructor(private router: Router,private formBuilder: FormBuilder) { }
  isSubmitted  =  false;
  organizationForm:FormGroup;
  ngOnInit() {
    this.organizationForm=this.formBuilder.group({
      organizationName:['', Validators.required],
      organizationEmail:['',[Validators.required, Validators.email]],
      organizationAddress:['', Validators.required],
      organizationContactNo:['', [Validators.required, Validators.max(10)]]
    })
  }
  get formControls() { return this.organizationForm.controls; }

  save(){
    
  }
}
