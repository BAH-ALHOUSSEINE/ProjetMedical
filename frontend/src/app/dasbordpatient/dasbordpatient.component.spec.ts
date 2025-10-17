import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasbordpatientComponent } from './dasbordpatient.component';

describe('DasbordpatientComponent', () => {
  let component: DasbordpatientComponent;
  let fixture: ComponentFixture<DasbordpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasbordpatientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasbordpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
