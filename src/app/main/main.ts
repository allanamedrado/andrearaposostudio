import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { CardService } from '../components/card-service/card-service';

@Component({
  selector: 'app-main',
  imports: [FontAwesomeModule, CardService],
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
      title: 'Microlabial',
      description: 'Técnica avançada para lábios, proporcionando um visual duradouro.',
      image: 'assets/images/massagem.png',
    },
    {
      id: 2,
      title: 'Limpeza de pele',
      description: 'Definição e realce das sobrancelhas com resultados naturais.',
      image: 'assets/images/limpeza.jpg',
    },
    {
      id: 3,
      title: 'Drenagem Linfática e Massagens',
      description: 'Definição e realce das sobrancelhas com resultados naturais.',
      image: 'assets/images/labios.png',
    }
  ]
  protected openWppWeb(): void {
    const phone = '+556193671141';
    const message = encodeURIComponent('Olá, gostaria de realizar um agendamento!');
    const url = `https://wa.me/${phone}?text=${message}`;

    window.open(url, '_blank');
  }
}
