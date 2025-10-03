import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateNotasGenerales } from './template-notas-generales';

describe('TemplateNotasGenerales', () => {
  let component: TemplateNotasGenerales;
  let fixture: ComponentFixture<TemplateNotasGenerales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateNotasGenerales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateNotasGenerales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
