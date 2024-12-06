import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedPageComponent } from './components/protected-page/protected-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProtectedPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedPageRoutingModule {}
