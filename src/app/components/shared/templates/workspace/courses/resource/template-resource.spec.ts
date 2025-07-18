import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateResource } from './template-resource';

describe('TemplateResource', () => {
  let component: TemplateResource;
  let fixture: ComponentFixture<TemplateResource>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateResource]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateResource);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
