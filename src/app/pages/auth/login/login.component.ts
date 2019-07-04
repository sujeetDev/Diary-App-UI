import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private formBuilder: FormBuilder) { }
  isSubmitted  =  false;
  loginForm:FormGroup;
  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      userName:['', Validators.required],
      password:['', Validators.required]
    })
  }
  get formControls() { return this.loginForm.controls; }

  login(values){
    this.isSubmitted=true;
    if(this.loginForm.invalid){
      return;
    }else{
      sessionStorage.setItem('role',values.userName);
      if(values.userName=="user"){
        this.router.navigate(['/pages/dashboard']);
      }else if(values.userName=="admin"){
        this.router.navigate(['/pages/adminDashboard']);
      }else if(values.userName=="superadmin"){
        this.router.navigate(['/pages/superAdminDashboard']);
      }
      
    }

  }



}
