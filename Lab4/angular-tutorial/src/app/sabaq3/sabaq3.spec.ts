import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sabaq3 } from './sabaq3';

describe('Sabaq3', () => {
  let component: Sabaq3;
  let fixture: ComponentFixture<Sabaq3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sabaq3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sabaq3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
