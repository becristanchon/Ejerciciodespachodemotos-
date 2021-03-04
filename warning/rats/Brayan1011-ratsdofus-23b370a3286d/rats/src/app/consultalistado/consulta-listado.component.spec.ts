import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaListadoComponent } from './consultalistado.component';

describe('ConsultaListadoComponent', () => {
  let component: ConsultaListadoComponent;
  let fixture: ComponentFixture<ConsultaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
