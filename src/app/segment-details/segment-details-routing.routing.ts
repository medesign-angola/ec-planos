import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegmentDetailsComponent } from './segment-details.component';

const routes: Routes = [{ path: '', component: SegmentDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegmentDetailsRoutingModule { }