import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardsComponent } from './pages/cards/cards.component';
import { HomeComponent } from './pages/home/home.component';
import { RandomComponent } from './pages/random/random.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './constants/footer/footer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'random', component: RandomComponent },
  { path: 'all', component: CardsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HomeComponent,
    RandomComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
