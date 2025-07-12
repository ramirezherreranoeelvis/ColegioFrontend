import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateWorkspace } from './template-workspace';

describe('TemplateWorkspace', () => {
  let component: TemplateWorkspace;
  let fixture: ComponentFixture<TemplateWorkspace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateWorkspace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateWorkspace);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
