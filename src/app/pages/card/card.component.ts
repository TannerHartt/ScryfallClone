import {Component,  OnDestroy, OnInit} from '@angular/core';
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
  searchValue: string = '';
  subscription: Subscription = new Subscription();
  setSubscription: Subscription = new Subscription();


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

  // Resetting stored card data, subscriptions, and the search string.
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.setSubscription.unsubscribe();
    this.set = null;
    this.card = null;
    this.searchValue = '';
  }


  // A function to fetch the card from the user entered search value to store and display.
  getCard() {
    this.subscription = this.cardService.getSearchValue(this.searchValue).subscribe((card) => {
      this.card = card;
      this.getSetData(card.set_id);
    });
  }

  // Fetches a random card from the API and stores it to display.
  getRandomCard() {
    this.subscription = this.cardService.getRandomCard().subscribe((card) => {
      this.card = card;
      this.getSetData(card.set_id);
    });
  }

  getSetData(set: string) {
    this.setSubscription = this.cardService.getSetData(set).subscribe((setData) => {
      this.set = setData;
    })
  }

}

