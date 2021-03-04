import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalclonadoresComponent } from './principalclonadores.component';

describe('PrincipalclonadoresComponent', () => {
  let component: PrincipalclonadoresComponent;
  let fixture: ComponentFixture<PrincipalclonadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalclonadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalclonadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
