import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSPComponent } from './add-sp/add-sp.component';
import { AuthGuard } from './guards/auth.guard';
import { InsertstaffNodejsComponent } from './insertstaff-nodejs/insertstaff-nodejs.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NodestaffComponent } from './nodestaff/nodestaff.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { SignupComponent } from './signup/signup.component';
import { TableSPComponent } from './table-sp/table-sp.component';
import { UpdateSPComponent } from './update-sp/update-sp.component';

const routes: Routes = [

  {path:'admin', component:MainLayoutComponent,
      canActivate:[AuthGuard],
      children:[
        {path: "", component:TableSPComponent},
        {path: "addnewSP", component:AddSPComponent},
        {path: "update/:id",component:UpdateSPComponent},
      ]
  },
  {path:'login', component:LoginLayoutComponent},


  {path: "", component:MainpageComponent},
  {path: "signup", component:SignupComponent},
  {path: "nodestaff", component:NodestaffComponent},
  {path: "insertstaff", component:InsertstaffNodejsComponent},

  

  // {path: "addnewSP", component:AddSPComponent},
  // {path: "tableSP", component:TableSPComponent},
  // {path: "login", component:LoginComponent},
  // {path: "signup", component:SignupComponent},
  // {path : "tableSP/update/:id",component:UpdateSPComponent},
  // {path: "loginlayout", component:LoginLayoutComponent},


   // path ** here meaning the page not have the same name as any path define here!!!
   {path: "**", component:PagenotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
