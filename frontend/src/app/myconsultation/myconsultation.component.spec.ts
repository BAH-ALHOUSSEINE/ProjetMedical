import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyconsultationComponent } from './myconsultation.component';

describe('MyconsultationComponent', () => {
  let component: MyconsultationComponent;
  let fixture: ComponentFixture<MyconsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyconsultationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyconsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
