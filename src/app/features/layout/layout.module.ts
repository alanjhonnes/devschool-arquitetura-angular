import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [SharedModule, LayoutRoutingModule],
})
export class LayoutModule {}
