import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
//los unit test deben empezar con describe
describe('AppComponent', () => {
  beforeEach(async(() => {
    //TestBed es un modulo de testing ya implementado
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
 //cada test empieza con un it ... se puede agregar un async para hacerlo asincrono
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    //el expect es lo q deberia pasar ... en este caso es q se deberia haber creado el componente
    expect(app).toBeTruthy();
  });

  it(`should have as title 'platzi-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    //aca chequeamos q el titulo sea igual a platzi-test
    expect(app.title).toEqual('platzi-test-provocando-error');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    //el detectChanges detecta los cambios
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    //aca chequeamos que el titulo del componente este dentro de un h1
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to platzi-test-provocando-error!');
  });
});

//ng test corre los test unitarios