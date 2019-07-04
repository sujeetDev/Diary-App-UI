import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NbLayoutModule,NbSidebarModule,NbMenuModule,NbContextMenuModule,NbUserModule,NbActionsModule } from '@nebular/theme';
import {PagesRouting} from './pages.routing';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/userDashboard/dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { SuperAdminDashboardComponent } from './dashboard/super-admin-dashboard/super-admin-dashboard.component';


@NgModule({
    imports:[CommonModule,PagesRouting,NbLayoutModule,NbSidebarModule,NbMenuModule,NbContextMenuModule,NbUserModule,NbActionsModule],
    declarations:[PagesComponent,DashboardComponent, AdminDashboardComponent, SuperAdminDashboardComponent],
    providers:[]
})

export class PagesModule{}