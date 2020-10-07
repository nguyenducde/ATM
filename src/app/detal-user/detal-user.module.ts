import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalUserPageRoutingModule } from './detal-user-routing.module';

import { DetalUserPage } from './detal-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalUserPageRoutingModule
  ],
  declarations: [DetalUserPage]
})
export class DetalUserPageModule {}
