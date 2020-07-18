import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCadastroFornecedorPage } from './modal-cadastro-fornecedor.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCadastroFornecedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCadastroFornecedorPageRoutingModule {}
