import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Card} from "../models/card";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  scryfallUrl: string = "https://api.scryfall.com";

  constructor(private http: HttpClient) { }


  getRandomCard() {
    return this.http.get(`${this.scryfallUrl}/cards/random`);
  }

  getSearchValue(searchValue: string) {
    return this.http.get<Card>(`${this.scryfallUrl}/cards/named?fuzzy=${searchValue}`);
  }

  getTSS() {
    return this.http.get<Card>(`${this.scryfallUrl}/cards/named?exact=tivit+seller+of+secrets`);
  }

  getKarn() {
    return this.http.get<Card>(`${this.scryfallUrl}/cards/named?exact=karn+the+great+creator`);
  }

  getBTM() {
    return this.http.get<Card>(`${this.scryfallUrl}/cards/named?exact=behold+the+multiverse`);
  }

  getYUP() {
    return this.http.get<Card>(`${this.scryfallUrl}/cards/named?exact=Yahenni+undying+partisan`);
  }

  getHF() {
    return this.http.get<Card>(`${this.scryfallUrl}/cards/named?exact=hallar+the+firefletcher`);
  }

  getASR() {
    return this.http.get<Card>(`${this.scryfallUrl}/cards/named?exact=alharu+solemn+ritualist`);
  }

  getNDE() {
    return this.http.get<Card>(`${this.scryfallUrl}/cards/named?exact=captain+vargus+wrath`);
  }
}
