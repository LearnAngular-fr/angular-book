import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadreComponent } from './cadre.component';

describe('CadreComponent', () => {
  let component: CadreComponent;
  let fixture: ComponentFixture<CadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
