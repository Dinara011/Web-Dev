import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sabaq9 } from './sabaq9';

describe('Sabaq9', () => {
  let component: Sabaq9;
  let fixture: ComponentFixture<Sabaq9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sabaq9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sabaq9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
