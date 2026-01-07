import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner',
  imports: [FontAwesomeModule],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner {
  icons = {
    faLocationDot,
    faPhone
  }
}
