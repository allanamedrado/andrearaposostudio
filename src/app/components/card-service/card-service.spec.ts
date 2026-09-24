import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { CardService } from './card-service';

describe('CardService', () => {
  let component: CardService;
  let fixture: ComponentFixture<CardService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
