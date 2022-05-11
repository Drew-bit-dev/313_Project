import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitpointsComponent } from './hitpoints.component';

describe('HitpointsComponent', () => {
  let component: HitpointsComponent;
  let fixture: ComponentFixture<HitpointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HitpointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HitpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
