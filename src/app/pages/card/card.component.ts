import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Card } from '../../models/card';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Sets } from '../../models/sets';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {

  constructor(private cardService: CardService, private route: ActivatedRoute, private router: Router) { }

  card: Card | null = null;
  set: Sets | null = null;
  prints: Card[] = [];
  searchValue: string = '';
  oracleText: string = '';

  printsSubscription: Subscription = new Subscription();
  subscription: Subscription = new Subscription();
  setSubscription: Subscription = new Subscription();


  // TODO finish fixing card text elements.

  ngOnInit(): void {
    // Grabs the "name" parameter from the url route and stores it in a string to fetch the correct card.
    this.searchValue = this.route.snapshot.paramMap.get("name") as string;


    // A simple condition statement to control which fetch function to call depending on what route is active.
    // This allows the random page to work differently than the search display functionality while still reusing the component.
    if(this.router.url === '/card/random') {
      this.getRandomCard();
    } else {
     this.getCard();
    }
  }

  // Resetting stored card data, set data, subscriptions, and search string.
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.setSubscription.unsubscribe();
    this.printsSubscription.unsubscribe();
    this.set = null;
    this.card = null;
    this.searchValue = '';
  }


  // A function to fetch the card from the user entered search value to store and display.
  getCard() {
    this.subscription = this.cardService.getSearchValue(this.searchValue).subscribe((card) => {
      this.card = card;

      this.getCardPrints(card.prints_search_uri);
      this.getSetData(card);
      this.formatText(card.oracle_text);

    });
  }

  // Fetches a random card from the API and stores it to display.
  getRandomCard() {
    this.subscription = this.cardService.getRandomCard().subscribe((card) => {
      this.card = card;

      this.getCardPrints(card.prints_search_uri);
      this.getSetData(card);
      this.formatText(card.oracle_text);
      console.log('Oracle text: ' + this.oracleText);

    });
  }

  getSetData(card: Card) {
    this.setSubscription = this.cardService.getSetData(card?.set_id).subscribe((setData) => {
      this.set = setData;
    });
  }

  getCardPrints(printURI: string) {
    this.printsSubscription = this.cardService.getPrintData(printURI).subscribe((card) => {
      this.prints = card;
    });
  }


  public replaceAll(str: string, find: string, replace: string): string {
    return str.replace(new RegExp(find,'g'), replace);
  }

  formatText(text: string) {

    let cardTexts = [];
    let cardAbilities = [];


    //   \{[BURGWT0-9]\}{1,6}.+?\. ==> regex that collects all mana/tap abilities.
    //   ^.*?[.!?](?:\s|$)         ==> regex that returns the first sentence.

    // (?<![a-zA-Z0-9])(Haste|Coven|Trample|Flash|Flying|Double Strike|Defender|Deathtouch|Reach).+?\.

    let temp = text;
    cardAbilities = temp.split(/\{[BURGWT0-9].+?\.+/gm);
    console.log('abilities: ' + cardAbilities);
    temp.matchAll(/\{[BURGWT0-9].+?\.+/gm);


    let firstSentence = text.split(/^.*?[.!?](?:\s|$)/);
    let italics = text.substring(text.indexOf('(') - 1, text.indexOf(')') + 1);


    console.log('First: ' + firstSentence);
  }

}

