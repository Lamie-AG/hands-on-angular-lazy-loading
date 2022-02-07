import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'contracts', loadChildren: () => import('./features/contracts/contracts.module').then(m => m.ContractsModule)},
  {path: 'claims', loadChildren: () => import('./features/claims/claims.module').then(m => m.ClaimsModule)},
  {path: 'customers', loadChildren: () => import('./features/customers/customers.module').then(m => m.CustomersModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
