import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaTailleComponent } from './ma-taille.component';

describe('MaTailleComponent', () => {
  let component: MaTailleComponent;
  let fixture: ComponentFixture<MaTailleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaTailleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaTailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
