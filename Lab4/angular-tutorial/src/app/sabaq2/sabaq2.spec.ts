import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sabaq2 } from './sabaq2';

describe('Sabaq2', () => {
  let component: Sabaq2;
  let fixture: ComponentFixture<Sabaq2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sabaq2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sabaq2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
