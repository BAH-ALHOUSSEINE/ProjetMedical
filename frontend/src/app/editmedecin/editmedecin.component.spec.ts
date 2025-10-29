import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmedecinComponent } from './editmedecin.component';

describe('EditmedecinComponent', () => {
  let component: EditmedecinComponent;
  let fixture: ComponentFixture<EditmedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditmedecinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditmedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
