import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTrackingComponent } from './course-tracking.component';

describe('CourseTrackingComponent', () => {
  let component: CourseTrackingComponent;
  let fixture: ComponentFixture<CourseTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseTrackingComponent]
    });
    fixture = TestBed.createComponent(CourseTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
