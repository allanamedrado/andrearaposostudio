import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCardComponent } from './carousel-card';

describe('CarouselCardComponent', () => {
  let component: CarouselCardComponent;
  let fixture: ComponentFixture<CarouselCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('items', [
      {
        title: 'Lash Lifting',
        description: 'Descrição',
        image: 'assets/images/sobrancelha.png',
      },
      {
        title: 'Limpeza de pele',
        description: 'Descrição',
        image: 'assets/images/limpeza.jpg',
      },
      {
        title: 'Drenagem Linfática',
        description: 'Descrição',
        image: 'assets/images/labios.png',
      },
    ]);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
