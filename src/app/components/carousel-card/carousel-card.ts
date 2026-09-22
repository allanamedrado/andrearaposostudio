import { Component, HostListener, computed, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardService } from '../card-service/card-service';

interface Card {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-carousel-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, CardService],
  templateUrl: './carousel-card.html',
  styleUrl: './carousel-card.scss',
  host: {
    '(window:resize)': 'onResize()',
  }
})
export class CarouselCardComponent {
  icons = {
    faAngleRight,
    faAngleLeft,
  };
  items = input<Card[]>([]);

  currentIndex = signal(0);
  visibleItems = signal(3);
  private touchStartX = 0;
  private readonly swipeThreshold = 45;

  constructor() {
    this.updateVisibleItems();

    setInterval(() => {
      this.next();
    }, 3000);
  }

  onResize() {
    this.updateVisibleItems();
  }

  maxIndex = computed(() =>
    Math.max(0, this.items().length - this.visibleItems())
  );

  next() {
    this.currentIndex.update(i =>
      i >= this.maxIndex() ? i : i + 1
    );
  }

  prev() {
    this.currentIndex.update(i =>
      i <= 0 ? i : i - 1
    );
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0]?.clientX ?? 0;
  }

  onTouchEnd(event: TouchEvent) {
    const touchEndX = event.changedTouches[0]?.clientX ?? 0;
    const delta = touchEndX - this.touchStartX;

    if (Math.abs(delta) < this.swipeThreshold) {
      return;
    }

    if (delta < 0) {
      this.next();
      return;
    }

    this.prev();
  }

  isCenterSlide(index: number) {
    return this.visibleItems() === 3 && index === this.currentIndex() + 1;
  }

  isSideSlide(index: number) {
    if (this.visibleItems() !== 3) {
      return false;
    }

    return index === this.currentIndex() || index === this.currentIndex() + 2;
  }

  get translateX() {
    return `translateX(-${this.currentIndex() * (100 / this.visibleItems())}%)`;
  }

  private updateVisibleItems() {
    if (typeof window === 'undefined') {
      this.visibleItems.set(3);
      return;
    }

    const width = window.innerWidth;

    if (width < 768) {
      this.visibleItems.set(1);
    } else if (width < 1024) {
      this.visibleItems.set(2);
    } else {
      this.visibleItems.set(3);
    }

    this.currentIndex.update(index => Math.min(index, this.maxIndex()));
  }
}
