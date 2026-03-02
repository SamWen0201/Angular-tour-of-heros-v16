import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {
    // heroService 是我們的 HeroService 的 injection site
  }

  // this is sychronous function
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // asychronous
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes'); // add message to
    return heroes;
  }
}
