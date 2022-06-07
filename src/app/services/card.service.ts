import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseUrl: string = "https://api.scryfall.com";

  constructor(private http: HttpClient) { }


  getRandomCard() {
    return this.http.get(`${this.baseUrl}/cards/random`);
  }
}
