import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrappraisalCycleComponent } from './hrappraisal-cycle.component';

describe('HrappraisalCycleComponent', () => {
  let component: HrappraisalCycleComponent;
  let fixture: ComponentFixture<HrappraisalCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrappraisalCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrappraisalCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
