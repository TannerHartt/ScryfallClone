import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  checkPage() {
    if(this.router.url === '/card/random') {
      window.location.reload();
      return;
    } else {
      this.router.navigate(['/card/random']).then();
      return;
    }
  }

}
