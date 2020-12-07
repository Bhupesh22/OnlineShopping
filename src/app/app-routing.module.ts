import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductdetailsComponent } from './addproductdetails/addproductdetails.component';
import { RetailerloginComponent } from './retailerlogin/retailerlogin.component';

const routes: Routes = [
  {path:'',redirectTo:'retailerlogin',pathMatch:'full'},
  {path:'retailerlogin',component:RetailerloginComponent},
  {path:'addproductdetails',component:AddproductdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
