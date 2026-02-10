import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sabaq4 } from './sabaq4';

describe('Sabaq4', () => {
  let component: Sabaq4;
  let fixture: ComponentFixture<Sabaq4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sabaq4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sabaq4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
