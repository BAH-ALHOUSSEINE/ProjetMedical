import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueconsultationComponent } from './historiqueconsultation.component';

describe('HistoriqueconsultationComponent', () => {
  let component: HistoriqueconsultationComponent;
  let fixture: ComponentFixture<HistoriqueconsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriqueconsultationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriqueconsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
