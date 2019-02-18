import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PersonComponent, Person } from './person.component';
import { By } from '@angular/platform-browser';


describe('PersonComponent', () => {

  let fixture: ComponentFixture<PersonComponent>;
  let comp: PersonComponent;
  let expectedHero: Person;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        PersonComponent
      ]
    });

    fixture = TestBed.createComponent(PersonComponent);
    comp = fixture.componentInstance;


    // On ajoute la person via notre @Input
    expectedHero = new Person('John', 'Doe', 'London');
    comp.person = expectedHero;
    // On simule le change detection
    fixture.detectChanges();

  });


  it(`should display John Doe`, () => {

    const elH1 = fixture.debugElement.query(By.css('h1'));
    const elH2 = fixture.debugElement.query(By.css('h2'));

    expect(elH1.nativeElement.textContent).toContain('John Doe');
    expect(elH2.nativeElement.textContent).toContain('London');
  });

  it(`should raise event when clicked`, () => {

    let sended: Person;
    comp.selected.subscribe((person: Person) => sended = person);

    const elH1 = fixture.debugElement.query(By.css('h1'));
    elH1.triggerEventHandler('click', null);
    expect(sended).toBe(expectedHero);
  });


});