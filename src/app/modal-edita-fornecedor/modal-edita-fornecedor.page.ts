import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FornecedorModel } from '../models/fornecedorModel';
import { ModalController, ToastController } from '@ionic/angular';
import { FornecedorService } from '../services/fornecedor-service/fornecedor.service';
import { SpinnerService } from '../services/spinner-service/spinner.service';

@Component({
  selector: 'app-modal-edita-fornecedor',
  templateUrl: './modal-edita-fornecedor.page.html',
  styleUrls: ['./modal-edita-fornecedor.page.scss'],
})
export class ModalEditaFornecedorPage implements OnInit {
  fornecedorForm: FormGroup;
  @Input() fornecedor: FornecedorModel;
  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private fornecedorSrvc: FornecedorService,
    private toastCtrl: ToastController,
    private spinnerSrvc: SpinnerService
  ) {}
  ngOnInit() {
    console.log(this.fornecedor);
    this.fornecedorForm = this.fb.group({
      id: [this.fornecedor.id, Validators.required],
      nmFornecedor: [this.fornecedor.nmFornecedor, Validators.required],
      social: [this.fornecedor.social, Validators.required],
      cnpj: [this.fornecedor.cnpj, Validators.required],
      endereco: [this.fornecedor.endereco, Validators.required],
      cidade: [this.fornecedor.cidade, Validators.required],
    });
  }

  salvar() {
    this.fornecedorSrvc.updateFornecedor(this.fornecedorForm.value).subscribe(
      async () => {
        const toast = await this.toastCtrl.create({
          message: 'Fornecedor atualizado com sucesso! ',
          duration: 2000,
        });
        toast.present();
        this.spinnerSrvc.hide();
        this.modalCtrl.dismiss();
      },
      async (err) => {
        const toast = await this.toastCtrl.create({
          message: 'Erro ao editar o fornecedor ' + err,
          duration: 2000,
        });
        toast.present();
        this.spinnerSrvc.hide();
      }
    );
  }

  cancelar() {
    this.modalCtrl.dismiss();
  }
}
