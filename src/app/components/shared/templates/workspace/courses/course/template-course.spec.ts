import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCourse } from './template-course';

describe('TemplateCourse', () => {
  let component: TemplateCourse;
  let fixture: ComponentFixture<TemplateCourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateCourse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateCourse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
