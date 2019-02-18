import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RandomService } from './random.service';

describe('AppComponent', () => {
  beforeEach(async(() => {

    // stub RandonService pour les besoins du test
    const randomServiceStub = {
      pull() {
        return 33;
      },

      pullAsync() {
        return new Promise((resolve) => {
          setTimeout(() => resolve(33), 3000);
        });
      }
    };


    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{provide: RandomService, useValue: randomServiceStub}]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'prj-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('prj-test');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to prj-test!');
  });


  it(`should return 33`, () => {
    const randomService = TestBed.get(RandomService);
    expect(randomService.pull()).toEqual(33);
  });

  it(`should display 33 `, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('33');
  });

  /* it(`should return 45`, () => {
    const randomService = TestBed.get(RandomService);
    randomService.pullAsync().then((res) => expect(res).toEqual(45));
  }); */

  it(`should display 33 `, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(compiled.querySelector('h4').textContent).toContain('33');
    });
  }));

  it('should display 33', done => {

    const randomService = TestBed.get(RandomService);
    const spy = spyOn(randomService, 'pullAsync').and.returnValue(Promise.resolve(33));

    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;

    fixture.detectChanges();

    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      expect(compiled.querySelector('h4').textContent).toContain('33');
      done();
    });

  });


});
