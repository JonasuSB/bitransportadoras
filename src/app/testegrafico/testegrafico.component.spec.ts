import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestegraficoComponent } from './testegrafico.component';

describe('TestegraficoComponent', () => {
  let component: TestegraficoComponent;
  let fixture: ComponentFixture<TestegraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestegraficoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestegraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
