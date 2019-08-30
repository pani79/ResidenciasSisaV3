import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCtextoeiconoComponent } from './boton-ctextoeicono.component';

describe('BotonCtextoeiconoComponent', () => {
  let component: BotonCtextoeiconoComponent;
  let fixture: ComponentFixture<BotonCtextoeiconoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonCtextoeiconoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonCtextoeiconoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
