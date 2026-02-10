import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sabaq11 } from './sabaq11';

describe('Sabaq11', () => {
  let component: Sabaq11;
  let fixture: ComponentFixture<Sabaq11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sabaq11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sabaq11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
