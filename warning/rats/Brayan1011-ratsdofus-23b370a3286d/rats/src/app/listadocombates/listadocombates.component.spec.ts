import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadocombatesComponent } from './listadocombates.component';

describe('ListadocombatesComponent', () => {
  let component: ListadocombatesComponent;
  let fixture: ComponentFixture<ListadocombatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadocombatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadocombatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
