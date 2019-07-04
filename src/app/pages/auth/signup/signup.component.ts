import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router,private formBuilder: FormBuilder) { }

  isSubmitted  =  false;
  signupForm:FormGroup;

  ngOnInit() {
    this.signupForm=this.formBuilder.group({
      firstName:['', Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      password:['', Validators.required]
    })
  }
  get formControls() { return this.signupForm.controls; }

  signup(values){
    this.isSubmitted=true;
    if(this.signupForm.invalid){
      return;
    }
  }
}
