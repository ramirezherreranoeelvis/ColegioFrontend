import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateHorario } from './template-horario';

describe('TemplateHorario', () => {
  let component: TemplateHorario;
  let fixture: ComponentFixture<TemplateHorario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateHorario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateHorario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
