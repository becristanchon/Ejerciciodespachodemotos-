import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportarbootsComponent } from './reportarboots.component';

describe('ReportarbootsComponent', () => {
  let component: ReportarbootsComponent;
  let fixture: ComponentFixture<ReportarbootsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportarbootsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportarbootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
