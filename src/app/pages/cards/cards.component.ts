import { Component, OnInit } from '@angular/core';
import {CardService} from "../../services/card.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: any = [];
  allCards: any = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getAllCards();
  }

  getCardData() {
    this.cardService.getRandomCard().subscribe(cardData => {
      this.cards = cardData;
    });
  }

  getAllCards() {
    this.cardService.getAllCardsInDb().subscribe(card => {
      this.allCards = card;
      console.log(card);
    });
  }


}
