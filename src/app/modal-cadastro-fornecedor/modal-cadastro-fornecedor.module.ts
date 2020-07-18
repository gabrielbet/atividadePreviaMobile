import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCadastroFornecedorPageRoutingModule } from './modal-cadastro-fornecedor-routing.module';

import { ModalCadastroFornecedorPage } from './modal-cadastro-fornecedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalCadastroFornecedorPageRoutingModule,
  ],
  declarations: [ModalCadastroFornecedorPage],
})
export class ModalCadastroFornecedorPageModule {}
