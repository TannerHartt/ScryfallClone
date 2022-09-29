import { Component, OnInit } from '@angular/core';
import {CardService} from "../../services/card.service";
import {Card} from "../../models/card";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private cardService: CardService) { }

  card: Card | null = null;

  ngOnInit(): void {
    this.getCard();
  }

  getCard() {
    this.cardService.getPR().subscribe((data) => {
      this.card = data;
      console.log(data);
    });
  }

}
