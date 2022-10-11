import {Component, OnDestroy, OnInit} from '@angular/core';
import { CardService } from '../../services/card.service';
import { Card } from '../../models/card';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit, OnDestroy {

  card: Card | null = null;
  cardSubscription: Subscription;

  constructor(private cardService: CardService) {
    this.cardSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.getRandomCard();
  }

  ngOnDestroy() {
    this.cardSubscription.unsubscribe()
  }

  getRandomCard() {
    this.cardSubscription = this.cardService.getRandomCard().subscribe((randomCard) => {
      this.card = randomCard;
    });
  }

}
