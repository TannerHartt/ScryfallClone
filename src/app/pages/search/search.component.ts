import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Card } from '../../models/card';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  cards: Card[] = [];
  searchValue: string = '';
  subscription: Subscription = new Subscription();

  constructor(private cardService: CardService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.searchValue = this.route.snapshot.paramMap.get('searchValue') as string;
    this.getSearchCards();
  }

  // Resetting all variables and subscriptions to avoid memory leaks.
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.cards = [];
    this.searchValue = '';
  }

  // This function fetches and stores all cards that contain the user entered search value.
  getSearchCards() {
    this.subscription = this.cardService.getSearchCards(this.searchValue).subscribe((card) => {
      this.cards = card;
    });
  }

  // This function redirects the user when they click on one of the card display elements.
  redirect(card: Card) {
    this.router.navigate(['/card/' + card.name]).then(() => {
      window.location.reload();
      window.scrollTo(0, 0);
    });
  }


}
