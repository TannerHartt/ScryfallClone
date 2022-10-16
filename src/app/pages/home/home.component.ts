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

  // Resetting all subscriptions and search strings;
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

  // TODO implement better solution to fetching collage cards.
  // A simple function that fetches all the cards to display on the home page collage.
  async getCollageCards() {
    this.subscription1 = await this.cardService.getTSS().subscribe((card) => this.cardOne = card);
    this.subscription2 = await this.cardService.getKarn().subscribe((card) => this.cardTwo = card);
    this.subscription3 = await this.cardService.getBTM().subscribe((card) => this.cardThree = card);
    this.subscription4 = await this.cardService.getYUP().subscribe((card) => this.cardFour = card);
    this.subscription5 = await this.cardService.getHF().subscribe((card) => this.cardFive = card);
    this.subscription6 = await this.cardService.getASR().subscribe((card) => this.cardSix = card);
    this.subscription7 = await this.cardService.getNDE().subscribe((card) => this.cardSeven = card);
  }


  /*
   * This function runs upon form submission and formats the user entered search value to comply with API formatting requirements.
   * Then it updates the route to the enter value and redirects the user to the correct card display.
   * It replaces all spaces in the string with the plus character.
   */
  search() {
    if(this.searchValue) {
      if (this.searchValue?.includes(' ')) {
        this.searchValue = this.replaceAll(this.searchValue,' ','+');
        this.router.navigate(['/card/' + this.searchValue]).then(() => {
          window.location.reload();
        });
      } else {
        this.router.navigate(['/card/' + this.searchValue]).then(() => {
          window.location.reload();
        });
      }
    }
  }

  // This function takes in a card name as a string and redirects the user to the corresponding route, then refreshes the page.
  redirect(name: string | undefined) {
    this.router.navigate(['/card/' + name]).then(() => {
      window.location.reload();
    });
  }

  // Simple custom function to make the built-in 'replace' function replace all instances of the passed value.
  public replaceAll(str: string, find: string, replace: string) {
    return str.replace(new RegExp(find,'g'), replace);
  }

  // A simple function to reload the page when clicking the home page logo.
  reload() {
    window.location.reload();
  }

}
