import {Component, Input, OnInit} from '@angular/core';
import {CardService} from "../../services/card.service";
import {Card} from "../../models/card";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private cardService: CardService) { }

  @Input() card: Card | null = null;
  @Input() searchValue: Card | null = null;

  ngOnInit(): void {

  }


}
