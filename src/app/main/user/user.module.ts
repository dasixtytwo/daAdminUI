import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '@theme/shared.module';

@NgModule({
  imports: [CommonModule, UserRoutingModule, SharedModule],
  declarations: []
})
export class UserModule {}
