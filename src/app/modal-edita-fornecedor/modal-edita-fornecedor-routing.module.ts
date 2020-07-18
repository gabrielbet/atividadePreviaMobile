import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditaFornecedorPage } from './modal-edita-fornecedor.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditaFornecedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditaFornecedorPageRoutingModule {}
