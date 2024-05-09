import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponen } from './counter/components/counter/counter.component';
import { HeroComponent } from './heroes/hero/hero.component';

import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponen,
    HeroComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
