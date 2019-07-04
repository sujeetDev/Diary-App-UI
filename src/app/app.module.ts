import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule, NbLayoutModule, NbSidebarModule,NbMenuModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NbThemeModule.forRoot(), BrowserAnimationsModule, NbThemeModule.forRoot({ name: 'default' })
    ,HttpClientModule,FormsModule,ReactiveFormsModule,NbSidebarModule.forRoot(),NbMenuModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
