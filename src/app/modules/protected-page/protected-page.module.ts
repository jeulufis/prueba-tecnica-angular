import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedPageRoutingModule } from './protected-page-routing.module';
import { ProtectedPageComponent } from './components/protected-page/protected-page.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProtectedPageRoutingModule, ProtectedPageComponent],
})
export class ProtectedPageModule {}
