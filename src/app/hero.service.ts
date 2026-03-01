import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {
    // heroService 是我們的 HeroService 的 injection site
  }

  // this is sychronous function
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // asychronous
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
