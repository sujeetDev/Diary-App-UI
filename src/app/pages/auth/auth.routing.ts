import { Routes, RouterModule } from '@angular/router';

import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';

const childRoutes:Routes=[
    {
        path:'',
        component:AuthComponent,
        children:[
            {path:'', redirectTo:'login', pathMatch:'full'},
            {path:'login', component:LoginComponent},
            {path:'signup', component:SignupComponent},
            {path:'forgotPassword', component:ForgotPasswordComponent}
        ]
    }
]

export const AuthRouting=RouterModule.forChild(childRoutes);