import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { FornecedorService } from '../services/fornecedor-service/fornecedor.service';
import { SpinnerService } from '../services/spinner-service/spinner.service';

@Component({
  selector: 'app-modal-cadastro-fornecedor',
  templateUrl: './modal-cadastro-fornecedor.page.html',
  styleUrls: ['./modal-cadastro-fornecedor.page.scss'],
})
export class ModalCadastroFornecedorPage implements OnInit {
  fornecedorForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private fornecedorSrvc: FornecedorService,
    private toastCtrl: ToastController,
    private spinnerSrvc: SpinnerService
  ) {
    this.fornecedorForm = fb.group({
      id: [''],
      nmFornecedor: ['', Validators.required],
      social: ['', Validators.required],
      cnpj: ['', Validators.required],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required],
    });
  }
  ngOnInit() {}

  salvar() {
    this.fornecedorSrvc.getFornecedor().subscribe(
      (data) => {
        data.sort((a, b) => a.id - b.id);
        let id = data[data.length - 1].id + 1;
        this.fornecedorForm = this.fb.group({
          id: [id],
          nmFornecedor: [
            this.fornecedorForm.get('nmFornecedor').value,
            Validators.required,
          ],
          social: [this.fornecedorForm.get('social').value, Validators.required],
          cnpj: [
            this.fornecedorForm.get('cnpj').value,
            Validators.required,
          ],
          endereco: [this.fornecedorForm.get('endereco').value, Validators.required],
          cidade: [this.fornecedorForm.get('cidade').value, Validators.required],
        });
        this.spinnerSrvc.hide();
        this.fornecedorSrvc.createFornecedor(this.fornecedorForm.value).subscribe(
          async () => {
            const toast = await this.toastCtrl.create({
              message: 'Fornecedor criado com sucesso!',
              duration: 2000,
            });
            toast.present();
            this.spinnerSrvc.hide();
            this.modalCtrl.dismiss();
          },
          async (err) => {
            const toast = await this.toastCtrl.create({
              message: 'Erro ao cadastrar o fornecedor: ' + err,
              duration: 2000,
            });
            toast.present();
            this.spinnerSrvc.hide();
          }
        );
      },
      (err) => {
        this.spinnerSrvc.hide();
      }
    );
  }

  cancelar() {
    this.modalCtrl.dismiss();
  }
}
