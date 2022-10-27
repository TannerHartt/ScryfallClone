import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CardsComponent } from './pages/cards/cards.component';
import { HomeComponent } from './pages/home/home.component';
import { RandomComponent } from './pages/random/random.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { CardComponent } from './pages/card/card.component';
import { LanguagePipe } from './services/language.pipe';
import { SearchComponent } from './pages/search/search.component';
import { UnderscorePipe } from './services/underscore.pipe';
import { FormatPipe } from './services/format.pipe';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'random', component: RandomComponent },
  { path: 'card/random', component: RandomComponent },
  { path: 'card/search', component: SearchComponent },
  { path: 'card/:name', component: CardsComponent },

  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HomeComponent,
    RandomComponent,
    FooterComponent,
    NavComponent,
    CardComponent,
    LanguagePipe,
    SearchComponent,
    UnderscorePipe,
    FormatPipe,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        FormsModule,
    ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
