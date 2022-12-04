import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerroComponent } from './cerro.component';

describe('CerroComponent', () => {
  let component: CerroComponent;
  let fixture: ComponentFixture<CerroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
