import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerExplorationComponent } from './career-exploration.component';

describe('CareerExplorationComponent', () => {
  let component: CareerExplorationComponent;
  let fixture: ComponentFixture<CareerExplorationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareerExplorationComponent]
    });
    fixture = TestBed.createComponent(CareerExplorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
