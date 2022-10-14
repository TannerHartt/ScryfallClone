import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CardService} from "../../services/card.service";
import {Card} from "../../models/card";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {

  constructor(private cardService: CardService, private route: ActivatedRoute) { }

  @Input() card: Card | null = null;
  @Input() searchValue: string = '';
  subscription: Subscription = new Subscription();

  // TODO create condition statement to handle which card to fetch
  ngOnInit(): void {
    this.searchValue = this.route.snapshot.paramMap.get("name") as string;
    this.getCard();
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

}
