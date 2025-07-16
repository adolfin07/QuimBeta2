import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { adminLoginPage } from './adminLogin.page';

const routes: Routes = [
  {
    path: '',
    component: adminLoginPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
