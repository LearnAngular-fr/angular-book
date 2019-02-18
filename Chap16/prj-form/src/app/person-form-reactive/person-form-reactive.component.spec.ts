import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFormReactiveComponent } from './person-form-reactive.component';

describe('PersonFormReactiveComponent', () => {
  let component: PersonFormReactiveComponent;
  let fixture: ComponentFixture<PersonFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
