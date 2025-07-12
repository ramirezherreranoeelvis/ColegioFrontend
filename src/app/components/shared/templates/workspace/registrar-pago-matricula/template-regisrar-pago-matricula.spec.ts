import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRegisrarPagoMatricula } from './template-regisrar-pago-matricula';

describe('TemplateRegisrarPagoMatricula', () => {
  let component: TemplateRegisrarPagoMatricula;
  let fixture: ComponentFixture<TemplateRegisrarPagoMatricula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateRegisrarPagoMatricula]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateRegisrarPagoMatricula);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
