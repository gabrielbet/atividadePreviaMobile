import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditaFornecedorPageRoutingModule } from './modal-edita-fornecedor-routing.module';

import { ModalEditaFornecedorPage } from './modal-edita-fornecedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalEditaFornecedorPageRoutingModule,
  ],
  declarations: [ModalEditaFornecedorPage],
})
export class ModalEditaFornecedorPageModule {}
