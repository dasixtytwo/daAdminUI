import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotComponent } from './forgot.component';
import { ForgotRoutingModule } from './forgot-routing.module';
import { SharedModule } from '@theme/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ForgotRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ForgotComponent]
})
export class ForgotModule {}
