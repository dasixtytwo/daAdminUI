import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { SharedModule } from '@theme/shared.module';

@NgModule({
  imports: [CommonModule, UserProfileRoutingModule, SharedModule],
  declarations: [UserProfileComponent]
})
export class UserProfileModule {}
