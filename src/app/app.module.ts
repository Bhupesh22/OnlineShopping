import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import {ForgotserviceService} from './services/forgotservice.service';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminserviceService } from './services/adminservice.service';
import { RetailerloginComponent } from './retailerlogin/retailerlogin.component';
import { RetailerloginService } from './services/retailerlogin.service';
import { AddproductdetailsComponent } from './addproductdetails/addproductdetails.component';
import { AddproductdetailsService } from './services/addproductdetails.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ForgotpasswordComponent,
    AdminComponent,
    AdminloginComponent,
    RetailerloginComponent,
    AddproductdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ForgotserviceService,AdminserviceService,RetailerloginService,AddproductdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
