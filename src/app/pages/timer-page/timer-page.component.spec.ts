import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerPageComponent } from './timer-page.component';

describe('TimerPageComponent', () => {
  let component: TimerPageComponent;
  let fixture: ComponentFixture<TimerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimerPageComponent]
    });
    fixture = TestBed.createComponent(TimerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
