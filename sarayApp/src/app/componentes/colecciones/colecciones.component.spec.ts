import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeccionesComponent } from './colecciones.component';

describe('ColeccionesComponent', () => {
  let component: ColeccionesComponent;
  let fixture: ComponentFixture<ColeccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColeccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
