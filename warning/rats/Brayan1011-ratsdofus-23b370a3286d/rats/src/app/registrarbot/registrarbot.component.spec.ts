import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarbotComponent } from './registrarbot.component';

describe('RegistrarbotComponent', () => {
  let component: RegistrarbotComponent;
  let fixture: ComponentFixture<RegistrarbotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarbotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
