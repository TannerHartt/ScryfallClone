import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card, Prints } from '../models/card';
import { Sets } from '../models/sets';
import { of, switchMap } from 'rxjs';

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

  getRedWhiteOneDrops() {
    return this.http.get<Prints>(`${this.scryfallUrl}/cards/search?q=c%3Awhite+cmc%3D1+c%3Ared&page%3D1`)
      .pipe(switchMap((res) => {
        return of(res.data);
      })
    );
  }

  getChandra() {
    return this.http.get<Prints>(`${this.scryfallUrl}/cards/search?q=chandra`)
      .pipe(switchMap((res) => {
          return of(res.data);
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
