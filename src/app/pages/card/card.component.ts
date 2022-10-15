import {Component,  OnDestroy, OnInit} from '@angular/core';
import { CardService } from '../../services/card.service';
import { Card } from '../../models/card';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {

  constructor(private cardService: CardService, private route: ActivatedRoute, private router: Router) { }

  card: Card | null = null;
  searchValue: string = '';
  subscription: Subscription = new Subscription();


  ngOnInit(): void {
    this.searchValue = this.route.snapshot.paramMap.get("name") as string;

    if(this.router.url === '/card/random') {
      this.getRandomCard();
    } else {
     this.getCard();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.card = null;
    this.searchValue = '';
  }


  getCard() {
    this.subscription = this.cardService.getSearchValue(this.searchValue).subscribe((card) => {
      this.card = card;
    });
  }

  getRandomCard() {
    this.subscription = this.cardService.getRandomCard().subscribe((card) => {
      this.card = card;
    });
  }

}
