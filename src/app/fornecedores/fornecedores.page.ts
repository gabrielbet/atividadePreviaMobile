import { Component, OnInit } from '@angular/core';
import { FornecedorModel } from '../models/fornecedorModel';
import { FornecedorService } from '../services/fornecedor-service/fornecedor.service';
import {
  ModalController,
  AlertController,
  ToastController,
} from '@ionic/angular';
import { SpinnerService } from '../services/spinner-service/spinner.service';
import { ModalCadastroFornecedorPage } from '../modal-cadastro-fornecedor/modal-cadastro-fornecedor.page';
import { ModalEditaFornecedorPage } from '../modal-edita-fornecedor/modal-edita-fornecedor.page';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.page.html',
  styleUrls: ['./fornecedores.page.scss'],
})
export class FornecedoresPage implements OnInit {
  fornecedores: FornecedorModel[];
  constructor(
    private fornecedorSrvc: FornecedorService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private spinnerSrvc: SpinnerService
  ) {}

  ngOnInit() {
    this.fornecedorSrvc.getFornecedor().subscribe(
      (data) => {
        this.fornecedores = data;
        this.spinnerSrvc.hide();
      },
      (err) => {
        this.spinnerSrvc.hide();
      }
    );
  }

  async cadastroFornecedor() {
    const modal = await this.modalCtrl.create({
      component: ModalCadastroFornecedorPage,
    });
    modal.present();
    modal.onDidDismiss().then(() => {
      this.ngOnInit();
    });
  }

  async delete(fornecedor: FornecedorModel) {
    const alert = await this.alertCtrl.create({
      header: 'Excluir?',
      message: `Você realmente deseja exluir o fornecedor ${fornecedor.nmFornecedor}`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Ok',
          handler: () => {
            this.fornecedorSrvc.deleteFornecedor(fornecedor.id).subscribe(
              async () => {
                const toast = await this.toastCtrl.create({
                  message: 'Fornecedor excluído com sucesso!',
                  duration: 2000,
                });
                toast.present();
                this.ngOnInit();
                this.spinnerSrvc.hide();
              },
              async (err) => {
                const toast = await this.toastCtrl.create({
                  message: 'Erro ao excluir o fornecedor ' + err,
                  duration: 2000,
                });
                toast.present();
                this.spinnerSrvc.hide();
              }
            );
          },
        },
      ],
    });
    alert.present();
  }

  async edit(fornecedor: FornecedorModel) {
    const modal = await this.modalCtrl.create({
      component: ModalEditaFornecedorPage,
      componentProps: {
        fornecedor: fornecedor,
      },
    });
    modal.present();
    modal.onDidDismiss().then(() => {
      this.ngOnInit();
    });
  }
}
