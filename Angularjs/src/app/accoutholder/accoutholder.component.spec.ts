import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoutholderComponent } from './accoutholder.component';

describe('AccoutholderComponent', () => {
  let component: AccoutholderComponent;
  let fixture: ComponentFixture<AccoutholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccoutholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccoutholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
