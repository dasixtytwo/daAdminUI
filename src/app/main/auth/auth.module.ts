import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '@theme/shared.module';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, SharedModule],
  declarations: []
})
export class AuthModule {}
