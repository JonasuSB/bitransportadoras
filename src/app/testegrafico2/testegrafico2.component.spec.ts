import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testegrafico2Component } from './testegrafico2.component';

describe('Testegrafico2Component', () => {
  let component: Testegrafico2Component;
  let fixture: ComponentFixture<Testegrafico2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testegrafico2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testegrafico2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
