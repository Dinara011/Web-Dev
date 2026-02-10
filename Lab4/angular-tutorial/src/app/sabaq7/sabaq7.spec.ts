import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sabaq7 } from './sabaq7';

describe('Sabaq7', () => {
  let component: Sabaq7;
  let fixture: ComponentFixture<Sabaq7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sabaq7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sabaq7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
