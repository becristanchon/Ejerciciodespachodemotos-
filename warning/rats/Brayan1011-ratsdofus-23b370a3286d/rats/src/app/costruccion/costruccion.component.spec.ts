import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostruccionComponent } from './costruccion.component';

describe('CostruccionComponent', () => {
  let component: CostruccionComponent;
  let fixture: ComponentFixture<CostruccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostruccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostruccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
