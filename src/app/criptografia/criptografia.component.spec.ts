import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriptografiaComponent } from './criptografia.component';

describe('CriptografiaComponent', () => {
  let component: CriptografiaComponent;
  let fixture: ComponentFixture<CriptografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriptografiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriptografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
