import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendordetComponent } from './vendordet/vendordet.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateVendorComponent } from './createvendor/createvendor.component';
import { UpdateVendorComponent } from './updatevendor/updatevendor.component';



  const routes: Routes = [{path:'',pathMatch:'full',redirectTo:'login'},
{path:'login',component:LoginComponent},
{path:'home',component:HomeComponent,

children:[

{path:'vendordet',component:VendordetComponent},
{path:'createvendor',component:CreateVendorComponent},
{path:'updatevendor/:vid',component:UpdateVendorComponent},
]
}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
