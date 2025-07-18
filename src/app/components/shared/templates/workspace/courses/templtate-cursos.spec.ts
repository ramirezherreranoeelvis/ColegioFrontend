import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCursos } from './template-cursos';

describe('TempltateCursos', () => {
  let component: TemplateCursos;
  let fixture: ComponentFixture<TemplateCursos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateCursos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateCursos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
