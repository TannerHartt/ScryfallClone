import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseUrl: string = "https://api.scryfall.com";
  dbUrl: string ='https://api.magicthegathering.io/v1/cards';

  constructor(private http: HttpClient) { }


  getRandomCard() {
    return this.http.get(`${this.baseUrl}/cards/random`);
  }

  getAllCards() {
    return this.http.get(`${this.baseUrl}/`);
  }

  getAllCardsInDb() {
    return this.http.get(`${this.dbUrl}`);
  }

}
