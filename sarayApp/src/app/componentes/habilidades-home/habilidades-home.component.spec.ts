import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesHomeComponent } from './habilidades-home.component';

describe('HabilidadesHomeComponent', () => {
  let component: HabilidadesHomeComponent;
  let fixture: ComponentFixture<HabilidadesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabilidadesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
