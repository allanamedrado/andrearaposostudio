import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { CarouselCardComponent } from '../components/carousel-card/carousel-card';
import { Carousel } from '../components/carousel/carousel';

@Component({
  selector: 'app-main',
  imports: [FontAwesomeModule, CarouselCardComponent, Carousel],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  faWppWeb = faWhatsapp;
  services = [
    {
      id: 0,
      title: 'Lash Lifting',
      description: 'Modelagem e design personalizado para realçar sua beleza natural.',
      image: 'assets/images/sobrancelha.png',
    },
    {
      id: 1,
      title: 'Micropigmentação labial',
      description: 'Realça a cor natural dos lábios com pigmentos aplicados de forma delicada e durável. Não dá volume. Duração média de 2 anos, variando conforme o cuidado.',
      image: 'assets/images/massagem.png',
    },
    {
      id: 2,
      title: 'Limpeza de pele',
      description: 'Tratamento essencial que remove impurezas, cravos e células mortas. Ajuda a desobstruir os poros, controlar a oleosidade e prevenir acne. Promove a renovação celular, melhora a textura da pele e devolve viço e luminosidade.',
      image: 'assets/images/limpeza.jpg',
    },
    {
      id: 3,
      title: 'Drenagem Linfática',
      description: 'É uma técnica de massagem suave que estimula o sistema linfático. Ajuda a eliminar toxinas, reduzir inchaços e melhorar a circulação. Promove a sensação de bem estar, leveza corporal e melhora do contorno corporal.',
      image: 'assets/images/labios.png',
    },
    {
      id: 4,
      title: 'Hidragloss',
      description: 'Definição e realce das sobrancelhas com resultados naturais. Procedimento que promove hidratação profunda dos lábios. Realça a cor natural e devolve o viço perdido. Melhora a textura, suaviza linhas finas e o ressecamento. Proporciona efeito gloss saudável e luminoso.',
      image: 'assets/images/labios.jpg',
    },
    {
      id: 5,
      title: 'Day Spa',
      description: 'Uma experiência completa de autocuidado e relaxamento. Combina tratamentos terapêuticos e estéticos para aliviar o estresse do dia a dia. Promove bem-estar, renovação das energias e equilíbrio entre corpo e mente.',
      image: 'assets/images/spa.jpg',
    },
    {
      id: 6,
      title: 'Massagem Terapêutica',
      description: 'Técnica de massagem que alivia tensões musculares, reduz o estresse e promove o relaxamento profundo. Utiliza movimentos específicos para melhorar a circulação sanguínea, aliviar dores e desconfortos. Proporciona bem-estar físico e mental, restaurando o equilíbrio do corpo.',
      image: 'assets/images/massagem.png',
    }
  ];

  servicesImages = [
    {
      id: 0,
      src: 'assets/images/atendimento_limpeza.jpeg',
      alt: 'Limpeza de pele',
    },
    {
      id: 1,
      src: 'assets/images/day_spa.jpeg',
      alt: 'Day Spa',
    },
    {
      id: 2,
      src: 'assets/images/msassagem_pedras_quentes.jpeg',
      alt: 'Massagem Terapêutica',
    },
    {
      id: 3,
      src: 'assets/images/drenagem_linfatica.jpeg',
      alt: 'Drenagem Linfática',
    },
    {
      id: 4,
      src: 'assets/images/drenagem_linfatica.jpeg',
      alt: 'Drenagem Linfática',
    },

    {
      id: 3,
      src: 'assets/images/drenagem_linfatica.jpeg',
      alt: 'Drenagem Linfática',
    }

  ]

  protected openWppWeb(): void {
    const phone = '+556193671141';
    const message = encodeURIComponent('Olá, gostaria de realizar um agendamento!');
    const url = `https://wa.me/${phone}?text=${message}`;

    window.open(url, '_blank');
  }
}
