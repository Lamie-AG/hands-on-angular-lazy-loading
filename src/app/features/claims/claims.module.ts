import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimListComponent } from './claim-list/claim-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =  [
  { path: '', component: ClaimListComponent }
];

@NgModule({
  declarations: [
    ClaimListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ClaimsModule { }
