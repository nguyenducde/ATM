import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalUserPage } from './detal-user.page';

const routes: Routes = [
  {
    path: '',
    component: DetalUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalUserPageRoutingModule {}
