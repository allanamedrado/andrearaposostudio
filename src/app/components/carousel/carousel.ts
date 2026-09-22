import { Component, input, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
interface CarouselImage {
  src: string;
  alt: string;
  id: number;
}

@Component({
  selector: 'app-carousel',
  imports: [FontAwesomeModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel {
  icons = {
    faAngleLeft,
    faAngleRight,
  };
  images = input.required<CarouselImage[]>();
  currentIndex = signal(0);
  private touchStartX = 0;
  private readonly swipeThreshold = 45;

  constructor() {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  protected prevSlide() {
    const isFirst = this.currentIndex() === 0;
    this.currentIndex.set(isFirst ? this.images().length - 1 : this.currentIndex() - 1);
  }

  protected nextSlide() {
    const isLast = this.currentIndex() === this.images().length - 1;
    this.currentIndex.set(isLast ? 0 : this.currentIndex() + 1);
  }

  protected goToSlide(index: number) {
    this.currentIndex.set(index);
  }

  protected onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0]?.clientX ?? 0;
  }

  protected onTouchEnd(event: TouchEvent) {
    const touchEndX = event.changedTouches[0]?.clientX ?? 0;
    const delta = touchEndX - this.touchStartX;

    if (Math.abs(delta) < this.swipeThreshold) {
      return;
    }

    if (delta < 0) {
      this.nextSlide();
      return;
    }

    this.prevSlide();
  }
}
