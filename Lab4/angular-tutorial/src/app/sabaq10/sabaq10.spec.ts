import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sabaq10 } from './sabaq10';

describe('Sabaq10', () => {
  let component: Sabaq10;
  let fixture: ComponentFixture<Sabaq10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sabaq10]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sabaq10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
