import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule,ToastrService} from "ngx-toastr";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VendordetComponent } from './vendordet/vendordet.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { HomeComponent } from './home/home.component';
import { CreateVendorComponent } from './createvendor/createvendor.component';
import { UpdateVendorComponent } from './updatevendor/updatevendor.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VendordetComponent,
    HomeComponent,
    CreateVendorComponent,
    UpdateVendorComponent 
    
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })

   
   
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
