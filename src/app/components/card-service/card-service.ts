import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-service',
  imports: [],
  templateUrl: './card-service.html',
  styleUrl: './card-service.scss',
})
export class CardService {
  title = input<string>();
  description = input<string>()
  image = input<string>();
}
