import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  icons = {
    faInstagram,
    faWhatsapp,
  };

  protected openWppWeb(): void {
    const phone = '+556193671141';
    const message = encodeURIComponent('Olá, gostaria de realizar um agendamento!');
    const url = `https://wa.me/${phone}?text=${message}`;

    window.open(url, '_blank');
  }

  protected openInstagram(): void {
    console.log('Opening Instagram...');
    const url = 'https://www.instagram.com/andrearaposostudio/';
    window.open(url, '_blank');
  }
}
