import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sabaq6 } from './sabaq6';

describe('Sabaq6', () => {
  let component: Sabaq6;
  let fixture: ComponentFixture<Sabaq6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sabaq6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sabaq6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
