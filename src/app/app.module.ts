import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from 'app/app-routing.module';
import { AuthGuardService } from '@theme/services/guards/auth-guard.service';

import { AppComponent } from 'app/app.component';
import { AdminComponent } from 'app/layout/admin/admin.component';
import { AuthComponent } from 'app/layout/auth/auth.component';
import { SharedModule } from '@theme/shared.module';
import { MenuItems } from '@theme/components/menu-items/menu-items';
import { BreadcrumbsComponent } from 'app/layout/admin/breadcrumbs/breadcrumbs.component';
import { WebReqInterceptor } from '@theme/interfaces/web-req.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    BreadcrumbsComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true },
    MenuItems,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
