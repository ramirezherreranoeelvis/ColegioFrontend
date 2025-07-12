import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateHistorial } from './template-historial';

describe('TemplateHistorial', () => {
  let component: TemplateHistorial;
  let fixture: ComponentFixture<TemplateHistorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateHistorial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateHistorial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
