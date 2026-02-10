import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sabaq1 } from './sabaq1';

describe('Sabaq1', () => {
  let component: Sabaq1;
  let fixture: ComponentFixture<Sabaq1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sabaq1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sabaq1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
