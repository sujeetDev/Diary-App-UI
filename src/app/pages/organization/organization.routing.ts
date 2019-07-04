import { Routes, RouterModule } from '@angular/router';

import {AddOrganizationComponent} from './add-organization/add-organization.component';
import {ViewOrganizationComponent} from './view-organization/view-organization.component';
import {EditOrganizationComponent} from './edit-organization/edit-organization.component';
import {OrganizationComponent} from './organization.component';
const childRoutes:Routes=[
    {
        path:'',
        component:OrganizationComponent,
        children:[
            {path:'', redirectTo:'addOrganization',pathMatch:'full'},
            {path:'addOrganization', component:AddOrganizationComponent},
            {path:'viewOrganization', component:ViewOrganizationComponent},
            {path:'editOrganization', component:EditOrganizationComponent}
        ]
    }
]

export const OrganizationRouting=RouterModule.forChild(childRoutes);