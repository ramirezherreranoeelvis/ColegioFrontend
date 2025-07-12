import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLogin } from './template-login';

describe('TemplateLogin', () => {
  let component: TemplateLogin;
  let fixture: ComponentFixture<TemplateLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
