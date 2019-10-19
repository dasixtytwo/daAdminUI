import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DefaultRoutingModule } from './default-routing.module';
import { SharedModule } from '@theme/shared.module';

@NgModule({
  imports: [CommonModule, DefaultRoutingModule, SharedModule],
  declarations: [DefaultComponent],
  bootstrap: [DefaultComponent]
})
export class DefaultModule {}
