import {Component, OnDestroy, OnInit} from '@angular/core';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from "rxjs";

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

  subscription1: Subscription = new Subscription();
  subscription2: Subscription = new Subscription();
  subscription3: Subscription = new Subscription();
  subscription4: Subscription = new Subscription();
  subscription5: Subscription = new Subscription();
  subscription6: Subscription = new Subscription();
  subscription7: Subscription = new Subscription();

  searchValue: string = '';

  constructor(private cardService: CardService, private router: Router) { }

  ngOnInit(): void {
    this.getCollageCards().then();
  }

  ngOnDestroy() {
    this.searchValue = '';
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
    this.subscription4.unsubscribe();
    this.subscription5.unsubscribe();
    this.subscription6.unsubscribe();
    this.subscription7.unsubscribe();
  }

  async getCollageCards() {
    this.subscription1 = await this.cardService.getTSS().subscribe((card) => this.cardOne = card);
    this.subscription2 = await this.cardService.getKarn().subscribe((card) => this.cardTwo = card);
    this.subscription3 = await this.cardService.getBTM().subscribe((card) => this.cardThree = card);
    this.subscription4 = await this.cardService.getYUP().subscribe((card) => this.cardFour = card);
    this.subscription5 = await this.cardService.getHF().subscribe((card) => this.cardFive = card);
    this.subscription6 = await this.cardService.getASR().subscribe((card) => this.cardSix = card);
    this.subscription7 = await this.cardService.getNDE().subscribe((card) => this.cardSeven = card);
  }


  search() {
    if(this.searchValue) {
      if (this.searchValue?.includes(' ')) {
        this.searchValue = this.replaceAll(this.searchValue,' ','+');
        this.router.navigate(['/card/' + this.searchValue]).then();
      } else {
        this.router.navigate(['/card/' + this.searchValue]).then();
      }
    }
  }

  redirect(name: string | undefined) {
    this.router.navigate(['/card/' + name]).then();
  }

  /*
    Simple custom function to make the built-in 'replace' function replace all instances of the passed value.
   */
  public replaceAll(str: string, find: string, replace: string) {
    return str.replace(new RegExp(find,'g'), replace);
  }

}
