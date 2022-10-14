import {Component, OnDestroy, OnInit} from '@angular/core';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';
import {ActivatedRoute, Router} from '@angular/router';

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

  searchValue: string = '';

  constructor(private cardService: CardService, private router: Router) { }

  ngOnInit(): void {
    this.getCollageCards().then();
  }

  ngOnDestroy() {
  }

  async getCollageCards() {
    await this.cardService.getTSS().subscribe((card) => this.cardOne = card);
    await this.cardService.getKarn().subscribe((card) => this.cardTwo = card);
    await this.cardService.getBTM().subscribe((card) => this.cardThree = card);
    await this.cardService.getYUP().subscribe((card) => this.cardFour = card);
    await this.cardService.getHF().subscribe((card) => this.cardFive = card);
    await this.cardService.getASR().subscribe((card) => this.cardSix = card);
    await this.cardService.getNDE().subscribe((card) => this.cardSeven = card);
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

  /*
    Simple custom function to make the built-in 'replace' function replace all instances of the passed value.
   */
  public replaceAll(str: string, find: string, replace: string) {
    return str.replace(new RegExp(find,'g'), replace);
  }

}
