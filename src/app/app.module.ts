import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination'; // phan trang 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { TableSPComponent } from './table-sp/table-sp.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AddSPComponent } from './add-sp/add-sp.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { UpdateSPComponent } from './update-sp/update-sp.component';
import { LoginComponent } from './login/login.component';//khai báo khi yêu cầu phải xác thực VD: trong chức năng update
import { SharingService } from './services/sharing.service';
import { SignupComponent } from './signup/signup.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { NodestaffComponent } from './nodestaff/nodestaff.component';
import { InsertstaffNodejsComponent } from './insertstaff-nodejs/insertstaff-nodejs.component'; //xử lý http bên node js

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    MainpageComponent,
    TableSPComponent,
    AddSPComponent,
    PagenotFoundComponent,
    UpdateSPComponent,
    LoginComponent,
    SignupComponent,
    LoginLayoutComponent,
    MainLayoutComponent,
    NodestaffComponent,
    InsertstaffNodejsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features=> dùng cho chức năng update
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [SharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
