import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/userDashboard/dashboard.component';
import {AdminDashboardComponent} from './dashboard/admin-dashboard/admin-dashboard.component';
import {SuperAdminDashboardComponent} from './dashboard/super-admin-dashboard/super-admin-dashboard.component';

const childRoutes:Routes=[
    {
        path:'',
        component:PagesComponent,
        children:[
            // {path:'', redirectTo:'dashboard', pathMatch:'full'},
            {path:'dashboard', component:DashboardComponent},
            {path:'adminDashboard', component:AdminDashboardComponent},
            {path:'superAdminDashboard', component:SuperAdminDashboardComponent},
            {path:'organization', loadChildren:'./organization/organization.module#OrganizationModule'}            
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(childRoutes)],
    exports:[RouterModule]
})

export class PagesRouting{}