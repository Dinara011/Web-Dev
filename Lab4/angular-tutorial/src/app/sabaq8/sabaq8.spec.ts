import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sabaq8 } from './sabaq8';

describe('Sabaq8', () => {
  let component: Sabaq8;
  let fixture: ComponentFixture<Sabaq8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sabaq8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sabaq8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
