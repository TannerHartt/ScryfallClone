import { Component, OnInit } from '@angular/core';
import {CardService} from "../../services/card.service";
import {Card} from "../../models/card";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cards: Card[] = [];

  constructor(private cardService: CardService, private router: Router) { }


  ngOnInit(): void {
    // this.getRedWhites();
    this.getChandra();
  }

  redirect(card: Card) {
    this.router.navigate(['/card/' + card.name]).then(() => {
      window.location.reload();
    });
  }

  getChandra() {
    this.cardService.getChandra().subscribe((card) => {
      this.cards = card;
    })
  }


  getRedWhites() {
    this.cardService.getRedWhiteOneDrops().subscribe((card) => {
      this.cards = card;
      console.log(card);
    });
  }

}
