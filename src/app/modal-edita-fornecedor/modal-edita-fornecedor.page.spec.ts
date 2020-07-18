import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalEditaFornecedorPage } from './modal-edita-fornecedor.page';

describe('ModalEditaFornecedorPage', () => {
  let component: ModalEditaFornecedorPage;
  let fixture: ComponentFixture<ModalEditaFornecedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditaFornecedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalEditaFornecedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
