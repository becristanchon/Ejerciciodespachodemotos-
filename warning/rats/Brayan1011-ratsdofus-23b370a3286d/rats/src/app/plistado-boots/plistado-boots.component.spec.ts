import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PListadoBootsComponent } from './plistado-boots.component';

describe('PListadoBootsComponent', () => {
  let component: PListadoBootsComponent;
  let fixture: ComponentFixture<PListadoBootsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PListadoBootsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PListadoBootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
