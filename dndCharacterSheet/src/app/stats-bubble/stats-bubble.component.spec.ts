import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsBubbleComponent } from './stats-bubble.component';

describe('StatsBubbleComponent', () => {
  let component: StatsBubbleComponent;
  let fixture: ComponentFixture<StatsBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsBubbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
