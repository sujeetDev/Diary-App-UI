import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddOrganizationComponent} from './add-organization/add-organization.component';
import {ViewOrganizationComponent} from './view-organization/view-organization.component';
import {EditOrganizationComponent} from './edit-organization/edit-organization.component';
import {OrganizationComponent} from './organization.component';
import {OrganizationRouting} from './organization.routing';
import { ReactiveFormsModule  } from '@angular/forms';

@NgModule({
    imports:[CommonModule,OrganizationRouting,ReactiveFormsModule],
    declarations:[OrganizationComponent,AddOrganizationComponent,ViewOrganizationComponent,EditOrganizationComponent],
    providers:[]
})

export class OrganizationModule{} 