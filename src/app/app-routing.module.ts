import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'fornecedores',
    pathMatch: 'full',
  },
  {
    path: 'fornecedores',
    loadChildren: () =>
      import('./fornecedores/fornecedores.module').then((m) => m.FornecedoresPageModule),
  },
  {
    path: 'modal-edita-fornecedor',
    loadChildren: () =>
      import('./modal-edita-fornecedor/modal-edita-fornecedor.module').then(
        (m) => m.ModalEditaFornecedorPageModule
      ),
  },
  {
    path: 'modal-cadastro-fornecedor',
    loadChildren: () =>
      import('./modal-cadastro-fornecedor/modal-cadastro-fornecedor.module').then(
        (m) => m.ModalCadastroFornecedorPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
