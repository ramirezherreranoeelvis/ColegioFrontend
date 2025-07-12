import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRegistrarMatricula } from './template-registrar-matricula';

describe('TemplateRegistrarMatricula', () => {
  let component: TemplateRegistrarMatricula;
  let fixture: ComponentFixture<TemplateRegistrarMatricula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateRegistrarMatricula]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateRegistrarMatricula);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
