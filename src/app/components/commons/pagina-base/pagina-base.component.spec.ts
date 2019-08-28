import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaBaseComponent } from './pagina-base.component';

describe('PaginaBaseComponent', () => {
  let component: PaginaBaseComponent;
  let fixture: ComponentFixture<PaginaBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
