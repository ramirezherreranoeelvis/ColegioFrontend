import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReportesIncidentes } from './template-reportes-incidentes';

describe('TemplateReportesIncidentes', () => {
  let component: TemplateReportesIncidentes;
  let fixture: ComponentFixture<TemplateReportesIncidentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateReportesIncidentes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateReportesIncidentes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
