import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sabaq5 } from './sabaq5';

describe('Sabaq5', () => {
  let component: Sabaq5;
  let fixture: ComponentFixture<Sabaq5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sabaq5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sabaq5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
