import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRegistrarPagoMensual } from './template-registrar-pago-mensual';

describe('TemplateRegistrarPagoMensual', () => {
  let component: TemplateRegistrarPagoMensual;
  let fixture: ComponentFixture<TemplateRegistrarPagoMensual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateRegistrarPagoMensual]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateRegistrarPagoMensual);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
