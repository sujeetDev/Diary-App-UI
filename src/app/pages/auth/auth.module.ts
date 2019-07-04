import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule } from '@nebular/theme';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {AuthRouting} from './auth.routing';

@NgModule({
    imports:[CommonModule,AuthRouting,NbLayoutModule,ReactiveFormsModule],
    declarations:[AuthComponent,LoginComponent,SignupComponent,ForgotPasswordComponent],
    providers:[]
})

export class AuthModule{} 
