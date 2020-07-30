import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
  
import { AppComponent } from './app.component';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule }    from '@angular/common/http';  
import { NavbarComponent } from './navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import { JwPaginationModule } from 'jw-angular-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({  
  declarations: [  
    AppComponent, NavbarComponent, LoginComponent, HomeComponent  
  ],  
  imports: [  
    BrowserModule,  
    FormsModule,  
    MatSortModule,
    ReactiveFormsModule,  
    HttpClientModule,
    AppRoutingModule,
    JwPaginationModule,
    BrowserAnimationsModule
  
  ],  
  bootstrap: [AppComponent]  
})  
export class AppModule { } 