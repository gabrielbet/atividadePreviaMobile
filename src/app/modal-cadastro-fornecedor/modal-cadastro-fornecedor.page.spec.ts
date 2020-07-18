import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCadastroFornecedorPage } from './modal-cadastro-fornecedor.page';

describe('ModalCadastroFornecedorPage', () => {
  let component: ModalCadastroFornecedorPage;
  let fixture: ComponentFixture<ModalCadastroFornecedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCadastroFornecedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCadastroFornecedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
