import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sabaq12 } from './sabaq12';

describe('Sabaq12', () => {
  let component: Sabaq12;
  let fixture: ComponentFixture<Sabaq12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sabaq12]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sabaq12);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
