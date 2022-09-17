import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  scryfallUrl: string = "https://api.scryfall.com";
  mtgDbUrl: string ='https://api.magicthegathering.io/v1/cards';

  constructor(private http: HttpClient) { }


  getRandomCard() {
    return this.http.get(`${this.scryfallUrl}/cards/random`);
  }

  getAllCards() {
    return this.http.get(`${this.scryfallUrl}/`);
  }

  getAllCardsInDb() {
    return this.http.get(`${this.mtgDbUrl}`);
  }

}
