import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  searchValue: string = '';

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.searchValue = '';
  }

  checkPage() {
    if(this.router.url === '/card/random') {
      window.location.reload();
    } else {
      this.router.navigate(['/card/random']).then(() => {
        window.location.reload();
      });
    }
  }

  searchCard() {
    if(this.searchValue) {
      if (this.searchValue?.includes(' ')) {
        this.searchValue = this.replaceAll(this.searchValue,' ','+');
        this.router.navigate(['/card/' + this.searchValue]).then(() => {
          window.location.reload();
          this.searchValue = '';
        });
      } else {
        this.router.navigate(['/card/' + this.searchValue]).then(() => {
          window.location.reload();
          this.searchValue = '';
        });
      }
    }
  }

  public replaceAll(str: string, find: string, replace: string) {
    return str.replace(new RegExp(find,'g'), replace);
  }
}
