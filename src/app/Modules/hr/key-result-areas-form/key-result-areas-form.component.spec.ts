import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyResultAreasFormComponent } from './key-result-areas-form.component';

describe('KeyResultAreasFormComponent', () => {
  let component: KeyResultAreasFormComponent;
  let fixture: ComponentFixture<KeyResultAreasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyResultAreasFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyResultAreasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
