import {Component, OnDestroy, OnInit} from '@angular/core';
import { Card } from '../../models/card';
import {CardService} from "../../services/card.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  isNew: boolean = false;
  cardOne: Card | null = null;
  cardTwo: Card | null = null;
  cardThree: Card | null = null;
  cardFour: Card | null = null;
  cardFive: Card | null = null;
  cardSix: Card | null = null;
  cardSeven: Card | null = null;
  searchValue: string | null = '';
  searchCard: Card | null = null;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getCollageCards();
  }

  ngOnDestroy() {

  }

  getCollageCards() {
    this.cardService.getTSS().subscribe((card) => this.cardOne = card);
    this.cardService.getKarn().subscribe((card) => this.cardTwo = card);
    this.cardService.getBTM().subscribe((card) => this.cardThree = card);
    this.cardService.getYUP().subscribe((card) => this.cardFour = card);
    this.cardService.getHF().subscribe((card) => this.cardFive = card);
    this.cardService.getASR().subscribe((card) => this.cardSix = card);
    this.cardService.getNDE().subscribe((card) => this.cardSeven = card);
  }

  search() {
    if(this.searchValue) {
      if (this.searchValue?.includes(' ')) {
        this.searchValue = this.searchValue?.replace(' ', "+");
        this.cardService.getSearchValue(this.searchValue).subscribe((card) => {
          this.searchCard = card;
          console.log(card);
        });
        this.searchValue = null;

      } else {
        this.cardService.getSearchValue(this.searchValue).subscribe((card) => {
          this.searchCard = card;
          console.log(card);
        });
        this.searchValue = null;
      }
    }
  }


}
