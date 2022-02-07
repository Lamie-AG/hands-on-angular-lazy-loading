import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractListComponent } from './contract-list/contract-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =  [
  { path: '', component: ContractListComponent }
];

@NgModule({
  declarations: [
    ContractListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContractsModule { }
