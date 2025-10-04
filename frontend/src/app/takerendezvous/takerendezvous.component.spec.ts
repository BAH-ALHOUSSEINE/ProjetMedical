import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakerendezvousComponent } from './takerendezvous.component';

describe('TakerendezvousComponent', () => {
  let component: TakerendezvousComponent;
  let fixture: ComponentFixture<TakerendezvousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakerendezvousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakerendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
