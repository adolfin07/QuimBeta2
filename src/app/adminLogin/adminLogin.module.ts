import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './adminLogin-routing.module';

import { adminLoginPage } from './adminLogin.page';
import { ImgLoginComponent } from './img-login/img-login.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ImgLoginComponent,
    FormComponent,
  ],
  declarations: [adminLoginPage],
})
export class AdminLoginPageModule {}
