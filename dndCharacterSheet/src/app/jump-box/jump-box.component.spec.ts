import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpBoxComponent } from './jump-box.component';

describe('JumpBoxComponent', () => {
  let component: JumpBoxComponent;
  let fixture: ComponentFixture<JumpBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumpBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
