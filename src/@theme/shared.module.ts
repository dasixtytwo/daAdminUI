import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToggleFullScreenDirective } from '@theme/directives/fullscreen/toggle-fullscreen.directive';
import { AccordionAnchorDirective } from '@theme/directives/accordion/accordionanchor.directive';
import { AccordionLinkDirective } from '@theme/directives/accordion/accordionlink.directive';
import { AccordionDirective } from '@theme/directives/accordion/accordion.directive';
import { HttpClientModule } from '@angular/common/http';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule
} from 'ngx-perfect-scrollbar';
import { TitleComponent } from 'app/layout/admin/title/title.component';
import { CardComponent } from '@theme/components/card/card.component';
import { CardToggleDirective } from '@theme/directives/card-toggle/card-toggle.directive';
import { ModalBasicComponent } from '@theme/components/modal-basic/modal-basic.component';
import { ModalAnimationComponent } from '@theme/components/modal-animation/modal-animation.component';
import { SpinnerComponent } from '@theme/components/spinner/spinner.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { DataFilterPipe } from '@theme/pipes/data-filter.pipe';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    PerfectScrollbarModule,
    ClickOutsideModule
  ],
  exports: [
    NgbModule,
    ToggleFullScreenDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardToggleDirective,
    HttpClientModule,
    PerfectScrollbarModule,
    TitleComponent,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent,
    SpinnerComponent,
    ClickOutsideModule,
    DataFilterPipe
  ],
  declarations: [
    ToggleFullScreenDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardToggleDirective,
    TitleComponent,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent,
    SpinnerComponent,
    DataFilterPipe
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {}
