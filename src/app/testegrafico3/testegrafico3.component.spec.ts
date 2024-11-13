import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testegrafico3Component } from './testegrafico3.component';

describe('Testegrafico3Component', () => {
  let component: Testegrafico3Component;
  let fixture: ComponentFixture<Testegrafico3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testegrafico3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testegrafico3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
