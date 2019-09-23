import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenteCrearComponent } from './residente-crear.component';

describe('ResidenteCrearComponent', () => {
  let component: ResidenteCrearComponent;
  let fixture: ComponentFixture<ResidenteCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidenteCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenteCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
