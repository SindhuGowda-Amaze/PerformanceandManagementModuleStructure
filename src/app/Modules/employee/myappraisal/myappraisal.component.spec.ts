import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyappraisalComponent } from './myappraisal.component';

describe('MyappraisalComponent', () => {
  let component: MyappraisalComponent;
  let fixture: ComponentFixture<MyappraisalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyappraisalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyappraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
