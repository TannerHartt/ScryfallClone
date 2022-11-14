import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card, CardLists } from '../models/card';
import { Sets } from '../models/sets';
import { of, switchMap } from 'rxjs';
import { SymbolDto } from '../models/symbols';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  scryfallUrl: string = 'https://api.scryfall.com';

  constructor(private http: HttpClient) { }

  getSetData(setId: string) {
    return this.http.get<Sets>(`${this.scryfallUrl}/sets/${setId}`);
  }

  getRandomCard() {
    return this.http.get<Card>(`${this.scryfallUrl}/cards/random`);
  }

  getSearchValue(searchValue: string) {
    return this.http.get<Card>(`${this.scryfallUrl}/cards/named?fuzzy=${searchValue}`);
  }

  getPrintData(printsURI: string) {
    return this.http.get<CardLists>(`${printsURI}`)
      .pipe(switchMap((res) => {
        return of(res.data);
      })
    );
  }



  // A function that fetches the user search value if the value returned by checkResponse() is > 1.
  getSearchCards(searchValue: string) {
    return this.http.get<CardLists>(`${this.scryfallUrl}/cards/search?q=${searchValue}`)
      .pipe(switchMap((res) => {
        return of(res.data);
      })
    );
  }

  // This function checks and returns the number of cards returned from the API.
  checkResponse(searchValue: string) {
    return this.http.get<CardLists>(`${this.scryfallUrl}/cards/search?q=${searchValue}`)
      .pipe(switchMap((res) => {
        return of(res.total_cards);
      })
    );
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
