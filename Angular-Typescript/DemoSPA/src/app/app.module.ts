import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { HistoryComponent } from './history/history.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NewsComponent,
    HistoryComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,RouterModule,
    RouterModule.forRoot([
      {path: 'Home', component: HomeComponent},
      {path: 'About', component: AboutComponent},
      {path: 'Contact', component: ContactComponent},
      {path: 'News', component: NewsComponent},
      {path: 'History', component: HistoryComponent},
      {path: '', redirectTo: 'Home', pathMatch:'full'},
      {path: '**', component: ErrorComponent},
    ],{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
