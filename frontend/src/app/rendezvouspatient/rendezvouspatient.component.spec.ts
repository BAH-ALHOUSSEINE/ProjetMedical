import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezvouspatientComponent } from './rendezvouspatient.component';

describe('RendezvouspatientComponent', () => {
  let component: RendezvouspatientComponent;
  let fixture: ComponentFixture<RendezvouspatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendezvouspatientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendezvouspatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
