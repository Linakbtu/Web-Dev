import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversePipe } from './reverse-pipe';

describe('ReversePipe', () => {
  let component: ReversePipe;
  let fixture: ComponentFixture<ReversePipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReversePipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReversePipe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
