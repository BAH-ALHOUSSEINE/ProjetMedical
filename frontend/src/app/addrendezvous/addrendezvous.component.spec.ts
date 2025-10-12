import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrendezvousComponent } from './addrendezvous.component';

describe('AddrendezvousComponent', () => {
  let component: AddrendezvousComponent;
  let fixture: ComponentFixture<AddrendezvousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddrendezvousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
