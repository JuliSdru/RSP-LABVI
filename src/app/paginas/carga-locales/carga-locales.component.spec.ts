import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaLocalesComponent } from './carga-locales.component';

describe('CargaLocalesComponent', () => {
  let component: CargaLocalesComponent;
  let fixture: ComponentFixture<CargaLocalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaLocalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaLocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
