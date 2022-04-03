import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewerCourseFormComponent } from './newer-course-form.component';

describe('NewerCourseFormComponent', () => {
  let component: NewerCourseFormComponent;
  let fixture: ComponentFixture<NewerCourseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewerCourseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewerCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
